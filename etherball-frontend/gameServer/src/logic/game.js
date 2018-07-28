const Timer = require("./timer");
const Team = require("./team");
const touch = require("./touch");

const team1Starters = [
  {
    name: "Donald Duck",
    id: "aengoiaie",
    athletics: "70.0075.0055.0045.0040.00",
    position: "PG",
    species: "bunny",
    playerType: "n"
  },
  {
    name: "Ryan Simpson",
    id: "agnaoigna",
    athletics: "70.0075.0055.0045.0040.00",
    position: "SG",
    species: "bunny",
    playerType: "n"
  },
  {
    name: "Jackie Ni",
    id: "agnaiegnioaeng",
    athletics: "70.0075.0055.0045.0040.00",
    position: "SF",
    species: "bunny",
    playerType: "n"
  },
  {
    name: "Tim Guo",
    id: "aognoaieg",
    athletics: "70.0075.0055.0045.0040.00",
    position: "PF",
    species: "bunny",
    playerType: "n"
  },
  {
    name: "Daniel",
    id: "agoeanegoia",
    athletics: "70.0075.0055.0045.0040.00",
    position: "C",
    species: "bunny",
    playerType: "n"
  }
];

const team2Starters = [
  {
    name: "Goofy",
    id: "ibibi",
    athletics: "70.0075.0055.0045.0040.00",
    position: "PG",
    species: "turtle",
    playerType: "w"
  },
  {
    name: "Mickey",
    id: "asa",
    athletics: "70.0075.0055.0045.0040.00",
    position: "SG",
    species: "bear",
    playerType: "a"
  },
  {
    name: "Minney",
    id: "asfaf",
    athletics: "70.0075.0055.0045.0040.00",
    position: "SF",
    species: "bear",
    playerType: "a"
  },
  {
    name: "Chip",
    id: "ff",
    athletics: "70.0075.0055.0045.0040.00",
    position: "PF",
    species: "bear",
    playerType: "n"
  },
  {
    name: "Club",
    id: "afafaffa",
    athletics: "70.0075.0055.0045.0040.00",
    position: "C",
    species: "bear",
    playerType: "j"
  }
];

const team1Bench = [
  {
    name: "Hellboy",
    id: "aengoiaie",
    athletics: "70.0075.0055.0045.0040.00",
    position: "SG",
    species: "turtle",
    playerType: "n"
  },
  {
    name: "57",
    id: "aengoiaie",
    athletics: "70.0075.0055.0045.0040.00",
    position: "SF",
    species: "turtle",
    playerType: "n"
  },
  {
    name: "Batman",
    id: "aengoiaie",
    athletics: "70.0075.0055.0045.0040.00",
    position: "C",
    species: "turtle",
    playerType: "n"
  }
];

const team2Bench = [
  {
    name: "KISS",
    id: "aengoiaie",
    athletics: "70.0075.0055.0045.0040.00",
    position: "SG",
    species: "turtle",
    playerType: "n"
  },
  {
    name: "Journey",
    id: "aengoiaie",
    athletics: "70.0075.0055.0045.0040.00",
    position: "SF",
    species: "turtle",
    playerType: "n"
  },
  {
    name: "Eagles",
    id: "aengoiaie",
    athletics: "70.0075.0055.0045.0040.00",
    position: "C",
    species: "turtle",
    playerType: "n"
  }
];

function Game(broadcast) {
  this.going = true;
  this.endGame = () => {
    this.going = false;
  };
  this.broadcast = broadcast;
  this.timer = new Timer(this.endGame);
  this.totalTime = 0;
  this.totalTouches = 0;
  this.awayTeam = new Team(team1Starters, team1Bench, false);
  this.homeTeam = new Team(team2Starters, team2Bench, true);
  this.possession = 1;
  this.withBall = this.homeTeam.onCourt[0];
  this.homeTeam.setStartingOffensivePositions();
  this.awayTeam.setStartingDefensivePositions();

  broadcast({
    message: `${this.homeTeam.onCourt[0].player.name} won the tip!`,
    add: 0,
    team: 1,
    finishedPlay: false,
    offense: this.homeTeam.onCourt,
    defense: this.awayTeam.onCourt,
    ballCarrier: this.homeTeam.onCourt[0],
    possession: 1,
    quarter: 1,
    time: 720
  });

  while (this.going) {
    var offense = this.possession === 1 ? this.homeTeam : this.awayTeam;
    var defense = this.possession === 2 ? this.homeTeam : this.awayTeam;

    const t = touch(
      this.withBall,
      offense.onCourt,
      defense.onCourt,
      this.possession
    );

    const time = this.timer.timeOfTouch(
      this.withBall.player.overall(),
      this.withBall.player.position
    );

    t.quarter = this.timer.quarter;
    t.time = this.timer.timeRemainingInQuarter;
    broadcast(t);

    if (t.fouled) {
      if (this.homeTeam.bench) {
        this.homeTeam.checkSubs(time, t.ballCarrier);
      }
      if (this.awayTeam.bench) {
        this.awayTeam.checkSubs(time, t.ballCarrier);
      }
      offense.setFoulLineOffense(t.ballCarrier);
      defense.setFoulLineDefense(defense);
    }

    if (t.finishedPlay) {
      this.possession = this.possession === 1 ? 2 : 1;
      const copy = offense;
      offense = defense;
      defense = copy;
      offense.setStartingOffensivePositions();
      defense.setStartingDefensivePositions();
      this.withBall = offense.onCourt[0];
      broadcast({
        message: `${offense.onCourt[0].player.name} has the ball!`,
        add: 0,
        team: this.possession,
        finishedPlay: false,
        offense: offense.onCourt,
        defense: defense.onCourt,
        ballCarrier: offense.onCourt[0],
        possession: this.possession,
        time: this.timer.timeRemainingInQuarter,
        quarter: this.timer.quarter
      });
    } else {
      offense.setCourt(t.offense);
      defense.setCourt(t.defense);
      this.withBall = t.ballCarrier;
    }

    this.totalTouches++;
    this.totalTime += time;
  }

  // this.homeTeam.showTimes();
  // this.awayTeam.showTimes();
}

module.exports = Game;
