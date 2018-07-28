const BaseGrid = require("./baseGrid");
const { SPACING, CONTROL, SHOOTING, DRIVE } = require("./constants");
const positionPotentials = require("./positionPotential");

const aGridHotspots = player => [
  {
    x: 20,
    y: 5,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 5,
    triggerPositions: [26],
    inherent: 80 * player.speed * positionPotentials(player.position, 4)
  },
  {
    x: 20,
    y: -5,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 5,
    triggerPositions: [23],
    inherent: 80 * player.speed * positionPotentials(player.position, 5)
  },
  {
    x: 46,
    y: -22,
    space: SPACING,
    scoring: DRIVE,
    gridPosition: 32,
    triggerPositions: [3, 12],
    inherent: 120 * player.speed * positionPotentials(player.position, 32)
  },
  {
    x: 46,
    y: 22,
    space: SPACING,
    scoring: DRIVE,
    gridPosition: 37,
    triggerPositions: [6, 17],
    inherent: 120 * player.speed * positionPotentials(player.position, 37)
  },
  {
    x: 40,
    y: -16,
    space: SPACING,
    scoring: DRIVE,
    gridPosition: 23,
    triggerPositions: [4],
    inherent: 140 * player.shot * positionPotentials(player.position, 23)
  },
  {
    x: 40,
    y: -16,
    space: SPACING,
    scoring: DRIVE,
    gridPosition: 26,
    triggerPositions: [5],
    inherent: 140 * player.shot * positionPotentials(player.position, 26)
  },
  {
    x: 52,
    y: -12,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 43,
    triggerPositions: [23],
    inherent: 120 * player.shot * positionPotentials(player.position, 43)
  },
  {
    x: 52,
    y: 12,
    space: CONTROL,
    scoring: DRIVE,
    gridPosition: 46,
    triggerPositions: [26],
    inherent: 120 * player.shot * positionPotentials(player.position, 46)
  },
  {
    x: 49,
    y: -8,
    space: SPACING,
    scoring: DRIVE,
    gridPosition: 44,
    triggerPositions: [22],
    inherent: 120 * player.shot * positionPotentials(player.position, 44)
  },
  {
    x: 49,
    y: 8,
    space: SPACING,
    scoring: DRIVE,
    gridPosition: 45,
    triggerPositions: [27],
    inherent: 120 * player.shot * positionPotentials(player.position, 45)
  }
];

function AGrid(player) {
  BaseGrid.call(this, player);

  this.addHotspots(aGridHotspots(player));
}

AGrid.prototype = Object.create(BaseGrid.prototype);
AGrid.prototype.constructor = AGrid;

module.exports = AGrid;
