const BaseGrid = require("./baseGrid");
const { SPACING, CONTROL, SHOOTING, DRIVE } = require("./constants");
const positionPotentials = require("./positionPotential");

const wGridHotspots = player => [
  {
    x: 20,
    y: 0,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 4,
    triggerPositions: [22, 27],
    inherent: 100 * player.speed * positionPotentials(player.position, 4)
  },
  {
    x: 25,
    y: -15,
    space: CONTROL,
    scoring: SHOOTING,
    gridPosition: 3,
    triggerPositions: [31],
    inherent: 100 * player.shot * positionPotentials(player.position, 3)
  },
  {
    x: 25,
    y: 15,
    space: CONTROL,
    scoring: SHOOTING,
    gridPosition: 6,
    triggerPositions: [38],
    inherent: 100 * player.shot * positionPotentials(player.position, 6)
  },
  {
    x: 32,
    y: -12,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 13,
    triggerPositions: [31],
    inherent: 100 * player.strength * positionPotentials(player.position, 13)
  },
  {
    x: 32,
    y: 12,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 16,
    triggerPositions: [38],
    inherent: 100 * player.strength * positionPotentials(player.position, 16)
  },
  {
    x: 36,
    y: -22,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 22,
    triggerPositions: [41],
    inherent: 100 * player.speed * positionPotentials(player.position, 22)
  },
  {
    x: 36,
    y: 22,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 27,
    triggerPositions: [48],
    inherent: 100 * player.speed * positionPotentials(player.position, 22)
  },
  {
    x: 36,
    y: -10,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 24,
    triggerPositions: [31],
    inherent: 100 * player.strength * positionPotentials(player.position, 24)
  },
  {
    x: 36,
    y: 10,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 25,
    triggerPositions: [38],
    inherent: 100 * player.speed * positionPotentials(player.position, 25)
  },
  {
    x: 46,
    y: -12,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 33,
    triggerPositions: [41, 12],
    inherent: 100 * player.strength * positionPotentials(player.position, 33)
  },
  {
    x: 46,
    y: 12,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 36,
    triggerPositions: [48, 17],
    inherent: 100 * player.strength * positionPotentials(player.position, 36)
  },
  {
    x: 42,
    y: -24,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 32,
    triggerPositions: [3],
    inherent: 100 * player.speed * positionPotentials(player.position, 32)
  },
  {
    x: 42,
    y: 24,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 37,
    triggerPositions: [6],
    inherent: 100 * player.speed * positionPotentials(player.position, 37)
  }
];

function WGrid(player) {
  BaseGrid.call(this, player);

  this.addHotspots(wGridHotspots(player));
}

WGrid.prototype = Object.create(BaseGrid.prototype);
WGrid.prototype.constructor = WGrid;

module.exports = WGrid;
