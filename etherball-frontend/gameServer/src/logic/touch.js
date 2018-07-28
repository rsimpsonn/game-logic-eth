var hoopPosition;
var sign;
var possession;
var lastPass = false;
var fouled = false;
var foulShot = 1;

const touch = (ballCarrier, offense, defense, p) => {
  possession = p;
  hoopPosition = possession === 1 ? 60 : -60;
  sign = possession === 1 ? 1 : -1;

  const indexOfBall = offense.findIndex(
    i => i.player.name === ballCarrier.player.name
  );

  var threats = [];
  var dribbleArea;
  var dribbling = true;

  if (fouled) {
    const made = success(fouled.player.shot * 1.2);
    var message;

    if (made) {
      fouled.player.addPoints(1);
      message = {
        message: `${ballCarrier.player
          .name} made free throw shot ${foulShot}/2!`,
        add: 1,
        team: possession,
        finishedPlay: foulShot === 2,
        offense,
        defense,
        ballCarrier,
        possession
      };
    } else {
      const reboundedBy = rebound(offense, defense);
      reboundedBy.reboundedBy.player.rebound();
      message = {
        message: `${ballCarrier.player
          .name} missed free throw shot ${foulShot}/2! ${foulShot === 2
          ? `${reboundedBy.reboundedBy.player.name} got the rebound`
          : ``}`,
        add: 0,
        team: possession,
        finishedPlay: foulShot === 2 && !reboundedBy.kept,
        offense,
        defense,
        ballCarrier: foulShot === 2 ? reboundedBy.reboundedBy : ballCarrier,
        possession
      };
    }
    if (foulShot === 2) {
      fouled = false;
      foulShot = 1;
    } else {
      foulShot++;
    }
    return message;
  } else {
    while (dribbling) {
      // Go to open areas if there are any and shoot or pass

      var closestDefender = 10000;
      var distanceFromHoop = Math.sqrt(
        Math.pow(ballCarrier.player.x - hoopPosition, 2) +
          Math.pow(ballCarrier.player.y, 2)
      );

      defense.forEach(defender => {
        if (Math.abs(defender.player.x) < Math.abs(ballCarrier.player.x))
          return;
        const d = distance(ballCarrier, defender);
        if (d <= closestDefender) closestDefender = d;
        if (d <= 15) {
          threats.push(defender);
        }
      });

      dribbleArea = polygonArea(
        threats.map(threat => threat.player.x),
        threats.map(threat => threat.player.y),
        threats.length + 1
      );

      // Wanna shoot?
      if (
        success(ballCarrier.player.confidence * 1.2) &&
        success(
          (30 - distanceFromHoop) *
            closestDefender /
            playersInRange(
              ballCarrier.player.x,
              ballCarrier.player.y,
              offense,
              defense,
              10
            )
        )
      ) {
        const made = success(ballCarrier.player.shot);
        if (
          closestDefender < 5 &&
          success(
            defense[indexOfBall].player.strength / (1 + closestDefender / 50)
          ) &&
          success(
            defense[indexOfBall].battery.energy / (1 + closestDefender / 50)
          )
        ) {
          defense[indexOfBall].player.block();
          lastPass = false;
          return {
            message: `${defense[indexOfBall].player.name} blocked ${ballCarrier
              .player.name}'s shot!`,
            add: 0,
            team: possession,
            finishedPlay: true,
            offense,
            defense,
            ballCarrier,
            possession
          };
        } else if (success(defense[indexOfBall].player.strength / 4)) {
          fouled = ballCarrier;
          return {
            message: `${defense[indexOfBall].player.name} fouled ${ballCarrier
              .player.name}`,
            add: 0,
            team: possession,
            finishedPlay: false,
            offense,
            defense,
            ballCarrier,
            possession,
            fouled: true
          };
        } else {
          if (made) {
            ballCarrier.player.addPoints(2);
            if (lastPass) {
              lastPass.player.assist();
            }
            return {
              message: `${ballCarrier.player.name} made the shot! ${lastPass
                ? `Assisted by ${lastPass.player.name}`
                : ``}`,
              add: 2,
              team: possession,
              finishedPlay: true,
              offense,
              defense,
              ballCarrier,
              possession
            };
          } else {
            ballCarrier.player.missedShot();
            const reboundedBy = rebound(offense, defense);
            reboundedBy.reboundedBy.player.rebound();
            lastPass = false;
            return {
              message: `${ballCarrier.player
                .name} missed the shot! ${reboundedBy.reboundedBy.player
                .name} got the rebound!`,
              add: 0,
              team: 1,
              finishedPlay: !reboundedBy.kept,
              offense,
              defense,
              ballCarrier: reboundedBy.reboundedBy,
              possession
            };
          }
        }
      } else if (success(ballCarrier.player.speed)) {
        // Wanna dribble?

        const { x, y } = ballCarrier.player.grid.withBallMovement(
          offense,
          defense
        );
        ballCarrier.player.setPosition(x, y);
        adjustOffense(ballCarrier, indexOfBall, offense, defense, 3);
        recovery(ballCarrier, offense, defense, 3);
        if (
          closestDefender < 5 &&
          success(
            defense[indexOfBall].player.speed / (1 + closestDefender / 10)
          ) &&
          success(
            defense[indexOfBall].battery.energy / (1 + closestDefender / 10)
          )
        ) {
          defense[indexOfBall].player.steal();
          lastPass = false;
          return {
            message: `${defense[indexOfBall].player
              .name} stole the ball from ${ballCarrier.player.name}!`,
            add: 0,
            team: possession,
            finishedPlay: true,
            offense,
            defense,
            ballCarrier,
            possession
          };
        }
      } else {
        // Wanna pass? Higher potential is worse!
        adjustOffense(ballCarrier, indexOfBall, offense, defense, 3);
        const { x, y } = ballCarrier.player.grid.withBallMovement(
          offense,
          defense
        );
        ballCarrier.player.setPosition(x, y);
        adjustOffense(ballCarrier, indexOfBall, offense, defense, 3);
        const opening = findOpening(ballCarrier, indexOfBall, offense, defense);
        lastPass = ballCarrier;
        const o = ballCarrier.player.grid.findOpening(
          offense,
          defense,
          ballCarrier
        );
        recovery(o, offense, defense, 3);
        return {
          message: `${ballCarrier.player.name} passed the ball to ${o.player
            .name}!`,
          add: 0,
          team: 1,
          finishedPlay: false,
          offense,
          defense,
          ballCarrier: o,
          possession
        };
      }
    }
  }
};

const success = value => {
  const random = Math.random() * 100;
  return value > random;
};

const distance = (player1, player2) => {
  return Math.sqrt(
    Math.pow(player1.player.x - player2.player.x, 2) +
      Math.pow(player1.player.y - player2.player.y, 2)
  );
};

const polygonArea = (xPoints, yPoints, numPoints) => {
  const X = xPoints;
  const Y = yPoints;
  X[xPoints.length] = hoopPosition;
  Y[yPoints.length] = 0;
  area = 0; // Accumulates area in the loop
  j = numPoints - 1; // The last vertex is the 'previous' one to the first

  for (i = 0; i < numPoints; i++) {
    area = area + (X[j] + X[i]) * (Y[j] - Y[i]);
    j = i; //j is previous vertex to i
  }

  return Math.abs(area / 2);
};

const center = (xPoints, yPoints) => {
  const X = xPoints;
  const Y = yPoints;
  X[xPoints.length] = hoopPosition;
  Y[yPoints.length] = 0;
  var minX, maxX, minY, maxY;
  for (var i = 0; i < X.length; i++) {
    minX = X[i] < minX || minX == null ? X[i] : minX;
    maxX = X[i] > maxX || maxX == null ? X[i] : maxX;
    minY = Y[i] < minY || minY == null ? Y[i] : minY;
    maxY = Y[i] > maxY || maxY == null ? Y[i] : maxY;
  }
  return { x: (minX + maxX) / 2, y: (minY + maxY) / 2 };
};

const midpoint = (player1, player2) => {
  return {
    x: (player1.player.x + player2.player.x) / 2,
    y: (player1.player.y + player2.player.y) / 2
  };
};

const destinationFactory = (idX, idY, time, speed, playerX, playerY) => {
  var distanceToIdealSpot = Math.sqrt(
    Math.pow(idX - playerX, 2) + Math.pow(idY - playerY, 2)
  );

  if (distanceToIdealSpot === 0) distanceToIdealSpot = 1;

  const distanceCovered = time * speed;
  const portionCovered = distanceCovered / distanceToIdealSpot;

  var trueX;
  var trueY;

  if (portionCovered >= 1) {
    trueX = idX;
    trueY = idY;
  } else {
    trueX = (idX - playerX) * portionCovered + playerX;
    trueY = (idY - playerY) * portionCovered + playerY;
  }

  return { x: trueX, y: trueY };
};

const onBallDestinationFactory = (bcX, bcY, time, speed, playerX, playerY) => {
  var distanceToHoop = Math.sqrt(
    Math.pow(bcX - hoopPosition, 2) + Math.pow(bcY, 2)
  );

  const slope =
    bcY /
    (bcX - Math.abs(hoopPosition) > -1 ? -1 : bcX - Math.abs(hoopPosition));
  const intercept = -1 * sign * slope * hoopPosition;

  const x = sign * distanceToHoop / 10 + bcX;
  const y = sign * slope * x + intercept;

  var distanceToIdealSpot = Math.sqrt(
    Math.pow(x - playerX, 2) + Math.pow(y - playerY, 2)
  );

  if (distanceToIdealSpot === 0) distanceToIdealSpot = 1;

  const distanceCovered = time * speed;
  const portionCovered = distanceCovered / distanceToIdealSpot;

  var trueX;
  var trueY;

  if (portionCovered >= 1) {
    trueX = x;
    trueY = y;
  } else {
    trueX = (x - playerX) * portionCovered + playerX;
    trueY = (y - playerY) * portionCovered + playerY;
  }

  return { x: trueX, y: trueY };
};

const newSpot = player => {
  const slope = (goalY - currentY) / (goalX - currentX);
  const intercept = goalY - slope * goalX;
  const direction = currentX > goalX ? -1 : 1;

  const x = time * speed * direction + currentX;

  return { x: x, y: slope * x + intercept };
};

const recovery = (ballCarrier, offense, defense, timeToGetThere) => {
  const distanceToHoop = Math.sqrt(
    Math.pow(ballCarrier.player.x - hoopPosition, 2) +
      Math.pow(ballCarrier.player.y, 2)
  );

  defense.forEach((defender, i) => {
    if (distanceToHoop <= 15) {
      const destination = onBallDestinationFactory(
        ballCarrier.player.x,
        ballCarrier.player.y,
        3,
        1 / 25 * defender.player.speed,
        defender.player.x,
        defender.player.y
      );
      defender.player.setPosition(destination.x, destination.y);
    } else {
      const destination = onBallDestinationFactory(
        offense[i].player.x,
        offense[i].player.y,
        3,
        1 / 25 * defender.player.speed,
        defender.player.x,
        defender.player.y
      );
      defender.player.setPosition(destination.x, destination.y);
    }
  });
};

const findOpening = (ballCarrier, indexOfBall, offense, defense) => {
  var bestPotential = { index: 0, potential: 0 };
  offense.forEach((offensivePlayer, index) => {
    if (index !== indexOfBall) {
      var closestDefender = 10000;
      defense.forEach(defender => {
        const d = distance(offensivePlayer, defender);
        if (d < closestDefender) closestDefender = d;
      });
      const distanceFromHoop = Math.sqrt(
        Math.pow(offensivePlayer.player.x - hoopPosition, 2) +
          Math.pow(offensivePlayer.player.y, 2)
      );
      const distanceFromBall = distance(offensivePlayer, ballCarrier);
      const potential = closestDefender; // Higher is worse
      if (bestPotential.potential < potential)
        bestPotential = { index, potential };
    }
  });
  return bestPotential;
};

const adjustOffense = (
  ballCarrier,
  indexOfBall,
  offense,
  defense,
  timeToGetThere
) => {
  offense.forEach(player => {
    const grid = getGrid(player.player);

    const gridPlayers = grid.map(spot => {
      var numOfPlayers = 1;
      defense.forEach(player => {
        if (isInsideSpot(player, spot)) numOfPlayers++;
      });
      offense.forEach(player => {
        if (isInsideSpot(player, spot)) numOfPlayers++;
      });
      return numOfPlayers;
    });
    var bestSpot = { player: { x: player.player.x, y: player.player.y } };
    var maxPotential = 0;

    grid.forEach((spot, index) => {
      var distanceFromSpot = distance(player, spot);
      if (distanceFromSpot === 0) distanceFromSpot = 1;
      const potential =
        spot.potential / (distanceFromSpot + gridPlayers[index]);
      if (potential > maxPotential) {
        maxPotential = potential;
        bestSpot = spot;
      }
    });

    if (
      player.player.name === "Goofy" ||
      player.player.name === "Chip" ||
      player.player.name === "Minney" ||
      player.player.name === "Club"
    ) {
      const gridSpot = player.player.grid.offBallMovement(
        ballCarrier,
        offense,
        defense,
        player
      );
      const { x, y } = destinationFactory(
        gridSpot.x,
        gridSpot.y,
        3,
        3,
        player.player.x,
        player.player.y
      );
      player.player.setPosition(gridSpot.x, gridSpot.y);
    } else {
      const { x, y } = destinationFactory(
        bestSpot.player.x,
        bestSpot.player.y,
        3,
        3,
        player.player.x,
        player.player.y
      );
      player.player.setPosition(bestSpot.player.x, bestSpot.player.y);
    }
  });
};

const playersInRange = (x, y, offense, defense, range) => {
  var count = 0;

  offense.forEach(player => {
    if (
      Math.sqrt(
        Math.pow(x - player.player.x, 2) + Math.pow(y - player.player.y, 2)
      ) <= range
    ) {
      count++;
    }
  });

  defense.forEach(player => {
    if (
      Math.sqrt(
        Math.pow(x - player.player.x, 2) + Math.pow(y - player.player.y, 2)
      ) <= range
    ) {
      count++;
    }
  });

  if (count === 0) return 1;

  return count;
};

const getGrid = player => {
  return [
    {
      number: 1,
      player: {
        x: sign * 22.5,
        y: -17.5
      },
      x1: sign * 15,
      y1: -25,
      x2: sign * 15,
      y2: -10,
      x3: sign * 30,
      y3: -25,
      x4: sign * 30,
      y4: -10,
      potential:
        player.shot * player.speed * player.confidence * (Math.random() * 100)
    },
    {
      number: 2,
      player: {
        x: sign * 22.5,
        y: 0
      },
      x1: sign * 15,
      y1: -10,
      x2: sign * 15,
      y2: 10,
      x3: sign * 30,
      y3: -10,
      x4: sign * 30,
      y4: 10,
      potential:
        player.shot * player.speed * player.confidence * (Math.random() * 100)
    },
    {
      number: 3,
      player: {
        x: sign * 22.5,
        y: 17.5
      },
      x1: sign * 15,
      y1: 10,
      x2: sign * 15,
      y2: 25,
      x3: sign * 30,
      y3: 10,
      x4: sign * 30,
      y4: 25,
      potential:
        player.shot * player.speed * player.confidence * (Math.random() * 100)
    },
    {
      number: 4,
      player: {
        x: sign * 37.5,
        y: -17.5
      },
      x1: sign * 30,
      y1: -25,
      x2: sign * 30,
      y2: -10,
      x3: sign * 45,
      y3: -25,
      x4: sign * 45,
      y4: -10,
      potential:
        player.speed *
          player.strength *
          player.confidence *
          (Math.random() * 100)
    },
    {
      number: 5,
      player: {
        x: sign * 37.5,
        y: 0
      },
      x1: sign * 30,
      y1: -10,
      x2: sign * 30,
      y2: 10,
      x3: sign * 45,
      y3: -10,
      x4: sign * 45,
      y4: 10,
      potential:
        player.speed *
          player.strength *
          player.confidence *
          (Math.random() * 100)
    },
    {
      number: 6,
      player: {
        x: sign * 37.5,
        y: 17.5
      },
      x1: sign * 30,
      y1: 10,
      x2: sign * 30,
      y2: 25,
      x3: sign * 45,
      y3: 10,
      x4: sign * 45,
      y4: 25,
      potential:
        player.speed *
          player.strength *
          player.confidence *
          (Math.random() * 100)
    },
    {
      number: 7,
      player: {
        x: sign * 52.5,
        y: -17.5
      },
      x1: sign * 45,
      y1: -25,
      x2: sign * 45,
      y2: -10,
      x3: hoopPosition,
      y3: -25,
      x4: hoopPosition,
      y4: -10,
      potential:
        player.speed * player.strength * player.strength * (Math.random() * 100)
    },
    {
      number: 8,
      player: {
        x: sign * 52.5,
        y: 0
      },
      x1: sign * 45,
      y1: -10,
      x2: sign * 45,
      y2: 10,
      x3: hoopPosition,
      y3: -10,
      x4: hoopPosition,
      y4: 10,
      potential:
        player.strength * player.strength * player.speed * (Math.random() * 100)
    },
    {
      number: 9,
      player: {
        x: sign * 52.5,
        y: 17.5
      },
      x1: sign * 45,
      y1: 10,
      x2: sign * 45,
      y2: 25,
      x3: hoopPosition,
      y3: 10,
      x4: hoopPosition,
      y4: 25,
      potential:
        player.shot * player.strength * player.strength * (Math.random() * 100)
    }
  ];
};

const isInsideSpot = (player, spot) => {
  return (
    player.player.x >= spot.x1 &&
    player.player.x < spot.x3 &&
    player.player.y >= spot.y1 &&
    player.player.y < spot.y2
  );
};

const rebound = (offense, defense) => {
  var total = 0;
  var ranges = [];

  defense.forEach(player => {
    total += player.player.strength + 100;
    ranges.push(player.player.strength + 100);
  });

  offense.forEach(player => {
    total += player.player.strength;
    ranges.push(player.player.strength);
  });

  const choice = Math.floor(Math.random() * total);

  var tracker = 0;
  var reboundedBy;
  var index = 0;

  while (!reboundedBy) {
    const range = ranges[index];
    tracker = tracker + range;
    if (choice <= tracker) {
      if (index <= 4) {
        reboundedBy = {
          reboundedBy: defense[index],
          kept: false
        };
      } else {
        const offenseIndex = index - 5;
        reboundedBy = {
          reboundedBy: offense[offenseIndex],
          kept: true
        };
      }
    }
    index++;
  }

  return reboundedBy;
};

module.exports = touch;
