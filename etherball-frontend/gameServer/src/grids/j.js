const BaseGrid = require("./baseGrid");
const { SPACING, CONTROL, SHOOTING, DRIVE } = require("./constants");
const positionPotentials = require("./positionPotential");

const jGridHotspots = player => [
  {
    x: 24,
    y: -8,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 3,
    triggerPositions: [32],
    inherent: 100 * player.shooting * positionPotentials(player.position, 3)
  },
  {
    x: 24,
    y: 8,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 6,
    triggerPositions: [47],
    inherent: 100 * player.shooting * positionPotentials(player.position, 6)
  },
  {
    x: 30,
    y: -22,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 12,
    triggerPositions: [33, 4],
    inherent: 100 * player.shooting * positionPotentials(player.position, 12)
  },
  {
    x: 30,
    y: 22,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 17,
    triggerPositions: [36, 4],
    inherent: 100 * player.shooting * positionPotentials(player.position, 17)
  },
  {
    x: 44,
    y: -22,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 31,
    triggerPositions: [24],
    inherent: 100 * player.shooting * positionPotentials(player.position, 31)
  },
  {
    x: 44,
    y: 22,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 38,
    triggerPositions: [25],
    inherent: 100 * player.shooting * positionPotentials(player.position, 38)
  },
  {
    x: 54,
    y: -24,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 41,
    triggerPositions: [33, 13],
    inherent: 100 * player.shooting * positionPotentials(player.position, 41)
  },
  {
    x: 54,
    y: 24,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 48,
    triggerPositions: [36, 16],
    inherent: 100 * player.shooting * positionPotentials(player.position, 48)
  },
  {
    x: 52,
    y: -22,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 42,
    triggerPositions: [22],
    inherent: 100 * player.strength * positionPotentials(player.position, 42)
  },
  {
    x: 52,
    y: 22,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 47,
    triggerPositions: [27],
    inherent: 100 * player.strength * positionPotentials(player.position, 47)
  }
];

function JGrid(player) {
  BaseGrid.call(this, player);

  this.addHotspots(jGridHotspots(player));
}

JGrid.prototype = Object.create(BaseGrid.prototype);
JGrid.prototype.constructor = JGrid;

module.exports = JGrid;
