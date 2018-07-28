const Coordinate = require("./coordinate");
const calculatePosition = require("./gridPosition");
const positionPotentials = require("./positionPotential");
const { SPACING, CONTROL, SHOOTING, DRIVE } = require("./constants");

function BaseGrid(player) {
  this.hotspots = [];

  this.addHotspots = hotspots => {
    hotspots.forEach(hotspot =>
      this.hotspots.push(
        new Coordinate(
          hotspot.x,
          hotspot.y,
          hotspot.space,
          hotspot.scoring,
          hotspot.gridPosition,
          hotspot.triggerPositions,
          hotspot.inherent
        )
      )
    );
  };

  this.withBallMovement = (offense, defense) => {
    var bestSpot;
    var playerCountAtBestSpot = 1000;

    this.hotspots.forEach(hotspot => {
      const playerCountAtSpot = hotspot.playersInRange(offense, defense, 10);
      if (playerCountAtSpot < playerCountAtBestSpot) {
        bestSpot = hotspot;
        playerCountAtBestSpot = playerCountAtSpot;
      }
    });

    return bestSpot;
  };

  this.offBallMovement = (ballCarrier, offense, defense, player) => {
    const pointOnGrid = calculatePosition(
      ballCarrier.player.x,
      ballCarrier.player.y
    );

    const triggered = this.hotspots.filter(hotspot =>
      hotspot.triggerPositions.includes(pointOnGrid)
    );

    var bestSpot;

    if (triggered.length > 0) {
      var otherPlayersInBestSpot = 1000;

      triggered.forEach(coordinate => {
        const playersInRange = coordinate.playersInRange(offense, defense, 3);
        if (playersInRange < otherPlayersInBestSpot) {
          bestSpot = coordinate;
          otherPlayersInBestSpot = playersInRange;
        }
      });
    } else {
      var bestPotential = 0;

      this.hotspots.forEach(coordinate => {
        const distanceFromBall = coordinate.distanceFrom(
          ballCarrier.player.x,
          ballCarrier.player.y
        );
        const distanceFromPlayer = coordinate.distanceFrom(
          player.player.x,
          player.player.y
        );
        const distanceFromHoop = coordinate.distanceFrom(60, 0);
        const playersInRange =
          (coordinate.playersInRange(offense, defense, 10) + 1) * 5;
        var initPotential = coordinate.inherent / playersInRange;

        // console.log(playersInRange, distanceFromBall, distanceFromHoop);

        switch (coordinate.space) {
          case SPACING:
            const potentialAtSpot =
              initPotential *
              (distanceFromBall / (distanceFromHoop * distanceFromPlayer));
            if (potentialAtSpot > bestPotential) {
              bestPotential = potentialAtSpot;
              bestSpot = coordinate;
            }
            break;
          case CONTROL: {
            const potentialAtSpot =
              initPotential *
              (distanceFromHoop /
                (distanceFromBall *
                  (Math.pow(distanceFromPlayer - 15, 2) / 5 + 5)));
            if (potentialAtSpot > bestPotential) {
              bestPotential = potentialAtSpot;
              bestSpot = coordinate;
            }
            break;
          }
        }
      });
    }

    var x = bestSpot.x;
    var y = bestSpot.y;

    return {
      x: x + Math.floor(Math.random() * 5),
      y: y + Math.floor(Math.random() * 5)
    };
  };

  this.findOpening = (offense, defense, player) => {
    var openPlayer;

    var triggered = [];
    const playerGridPosition = calculatePosition(
      player.player.x,
      player.player.y
    );
    var index = player.player.grid.hotspots.findIndex(
      i => i.gridPosition === playerGridPosition
    );
    var currentSpot = index !== -1 ? player.player.grid.hotspots[index] : false;

    if (currentSpot) {
      const triggering = currentSpot.triggerPositions;

      offense.forEach(teammate => {
        const gridPosition = calculatePosition(
          teammate.player.x,
          teammate.player.y
        );

        if (triggering.includes(gridPosition)) {
          triggered.push(teammate);
        }
      });
    }

    var bestPotential = 0;

    if (triggered.length > 0) {
      triggered.forEach(teammate => {
        const distanceFromHoop = Math.sqrt(
          Math.pow(teammate.player.x - 60, 2) + Math.pow(teammate.player.y, 2)
        );

        var playerCount = 0;

        offense.forEach(oPlayer => {
          if (
            Math.sqrt(
              Math.pow(oPlayer.player.x - teammate.player.x, 2) +
                Math.pow(oPlayer.player.y - teammate.player.y, 2)
            ) <= 10
          ) {
            playerCount++;
          }
        });

        defense.forEach(dPlayer => {
          if (
            Math.sqrt(
              Math.pow(dPlayer.player.x - teammate.player.x, 2) +
                Math.pow(dPlayer.player.y - teammate.player.y, 2)
            ) <= 10
          ) {
            playerCount++;
          }
        });

        if (playerCount === 0) {
          playerCount = 1;
        }
        const distanceFromBall = Math.sqrt(
          Math.pow(teammate.player.x - player.player.x, 2) +
            Math.pow(teammate.player.y - player.player.y, 2)
        );
        const gridPosition = calculatePosition(
          teammate.player.x,
          teammate.player.y
        );
        const inherent = positionPotentials(
          teammate.player.position,
          gridPosition
        );
        const potential =
          inherent *
          50 /
          (distanceFromHoop * distanceFromBall * (playerCount * 10));
        if (potential > bestPotential) {
          bestPotential = potential;
          openPlayer = teammate;
        }
      });
      console.log("triggered pass");
    }

    offense.forEach(teammate => {
      if (teammate.player.id !== player.player.id) {
        const distanceFromHoop = Math.sqrt(
          Math.pow(teammate.player.x - 60, 2) + Math.pow(teammate.player.y, 2)
        );

        var playerCount = 0;

        offense.forEach(oPlayer => {
          if (
            Math.sqrt(
              Math.pow(oPlayer.player.x - teammate.player.x, 2) +
                Math.pow(oPlayer.player.y - teammate.player.y, 2)
            ) <= 10
          ) {
            playerCount++;
          }
        });

        defense.forEach(dPlayer => {
          if (
            Math.sqrt(
              Math.pow(dPlayer.player.x - teammate.player.x, 2) +
                Math.pow(dPlayer.player.y - teammate.player.y, 2)
            ) <= 10
          ) {
            playerCount++;
          }
        });

        if (playerCount === 0) {
          playerCount = 1;
        }
        const distanceFromBall = Math.sqrt(
          Math.pow(teammate.player.x - player.player.x, 2) +
            Math.pow(teammate.player.y - player.player.y, 2)
        );
        const gridPosition = calculatePosition(
          teammate.player.x,
          teammate.player.y
        );
        const inherent = positionPotentials(
          teammate.player.position,
          gridPosition
        );
        const potential =
          inherent / (distanceFromHoop * distanceFromBall * (playerCount * 10));
        if (potential > bestPotential) {
          bestPotential = potential;
          openPlayer = teammate;
        }
      }
    });

    if (!(openPlayer instanceof Object)) {
      console.log("uh oh");
    }

    return openPlayer;
  };
}

module.exports = BaseGrid;
