const Player = require("./player");
const Battery = require("./battery");

function Team(starters, bench, isHome) {
  this.points = 0;
  this.isHome = isHome;

  this.onCourt = starters.map(player => {
    return {
      player: new Player(player, isHome ? 1 : 2),
      battery: new Battery(Number(player.athletics.substring(15, 20)), 80)
    };
  });

  this.bench = bench.map(player => {
    return {
      player: new Player(player, isHome ? 1 : 2),
      battery: new Battery(Number(player.athletics.substring(15, 20)), 60)
    };
  });

  this.positionToIndex = position => {
    var index = 0;
    switch (position) {
      case "SG":
        index = 1;
        break;
      case "SF":
        index = 2;
        break;
      case "PF":
        index = 3;
        break;
      case "C":
        index = 4;
        break;
    }
    return index;
  };

  this.checkSubs = (time, ballCarrier) => {
    this.bench.sort((a, b) => {
      return a.battery.productivity() - b.battery.productivity();
    });
    this.bench.forEach(player => {
      player.battery.addTime(time, false);
    });
    this.onCourt.forEach((player, onCourtIndex) => {
      player.battery.addTime(time, true);
      const onCourtProductivity = player.battery.productivity();
      this.bench.forEach((benchPlayer, benchIndex) => {
        if (
          benchPlayer.battery.productivity() > onCourtProductivity &&
          benchPlayer.player.position === player.player.position &&
          player.player.id !== ballCarrier.player.id
        ) {
          this.substitute(onCourtIndex, benchIndex);
        }
      });
    });
  };

  this.setCourt = onCourt => {
    this.onCourt = onCourt;
  };

  this.setStartingOffensivePositions = () => {
    const sign = this.isHome ? 1 : -1;
    this.onCourt[0].player.setPosition(sign * 20, 0);
    this.onCourt[1].player.setPosition(sign * 30, 20);
    this.onCourt[2].player.setPosition(sign * 30, -20);
    this.onCourt[3].player.setPosition(sign * 50, 10);
    this.onCourt[4].player.setPosition(sign * 50, -10);
  };

  this.setStartingDefensivePositions = () => {
    const sign = this.isHome ? -1 : 1;
    this.onCourt[0].player.setPosition(sign * 25, 0);
    this.onCourt[1].player.setPosition(sign * 35, 15);
    this.onCourt[2].player.setPosition(sign * 35, -15);
    this.onCourt[3].player.setPosition(sign * 50, 5);
    this.onCourt[4].player.setPosition(sign * 50, -5);
  };

  this.setFoulLineOffense = fouled => {
    const sign = this.isHome ? 1 : -1;
    const index = this.positionToIndex(fouled.player.position);
    const offensiveFoulPositions = [
      { x: sign * 20, y: 10 },
      { x: sign * 20, y: -10 },
      { x: sign * 50, y: 10 },
      { x: sign * 50, y: -10 }
    ];
    var loop = 0;
    this.onCourt.forEach((player, i) => {
      if (index !== i) {
        player.player.setPosition(
          offensiveFoulPositions[loop].x,
          offensiveFoulPositions[loop].y
        );
        loop++;
      }
    });

    this.onCourt[index].player.setPosition(sign * 30, 0);
  };

  this.setFoulLineDefense = () => {
    const sign = this.isHome ? -1 : 1;
    this.onCourt[0].player.setPosition(sign * 20, 8);
    this.onCourt[1].player.setPosition(sign * 20, -8);
    this.onCourt[2].player.setPosition(sign * 45, -10);
    this.onCourt[3].player.setPosition(sign * 55, -10);
    this.onCourt[4].player.setPosition(sign * 55, 10);
  };

  this.showTimes = () => {
    this.onCourt.forEach(player => {
      console.log(player.player.name + ": " + player.battery.time / 60);
    });

    this.bench.forEach(player => {
      console.log(player.player.name + ": " + player.battery.time / 60);
    });
  };

  this.substitute = (onCourtIndex, benchIndex) => {
    const onCourtPlayer = this.onCourt[onCourtIndex];
    this.onCourt[onCourtIndex] = this.bench[benchIndex];
    this.bench[benchIndex] = onCourtPlayer;
  };
}

module.exports = Team;
