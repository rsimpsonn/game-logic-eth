const Battery = require("./battery");
const typeGrids = require("../grids/index");
const NGrid = require("../grids/n");

function Player(p, t) {
  this.id = p.id;
  this.speed = Number(p.athletics.substring(0, 5));
  this.strength = Number(p.athletics.substring(5, 10));
  this.shot = Number(p.athletics.substring(10, 15));
  this.endurance = Number(p.athletics.substring(15, 20));
  this.confidence = Number(p.athletics.substring(20, 25));
  this.position = p.position;
  this.name = p.name;
  this.team = t;
  this.grid = new typeGrids[p.playerType](this);
  this.species = p.species;

  this.points = 0;
  this.seconds = 0;
  this.assists = 0;
  this.rebounds = 0;
  this.steals = 0;
  this.blocks = 0;
  this.turnovers = 0;
  this.shots = 0;
  this.makes = 0;
  this.x = 0;
  this.y = 0;

  this.addPoints = number => {
    this.points += number;
    this.shots += 1;
    this.makes += 1;
  };

  this.missedShot = () => {
    this.shots += 1;
  };

  this.assist = () => {
    this.assists += 1;
  };

  this.rebound = () => {
    this.rebounds += 1;
  };

  this.block = () => {
    this.blocks += 1;
  };

  this.steal = () => {
    this.steals += 1;
  };

  this.turnover = () => {
    this.turnover += 1;
  };

  this.overall = () => {
    return (this.strength + this.speed + this.shot) / 3;
  };

  this.setPosition = (x, y) => {
    this.x = x;
    this.y = y;
  };

  this.movement = (ballCarrier, offense, defense) => {
    const { x, y } = this.grid.movement(ballCarrier, offense, defense);
    this.setPosition(x, y);
  };
}

module.exports = Player;
