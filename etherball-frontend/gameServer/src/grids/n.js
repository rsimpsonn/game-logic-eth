const BaseGrid = require("./baseGrid");
const { SPACING, CONTROL, SHOOTING, DRIVE } = require("./constants");
const positionPotentials = require("./positionPotential");

const nGridHotspots = player => [
  {
    x: 20,
    y: 0,
    space: CONTROL,
    scoring: SHOOTING,
    gridPosition: 4,
    triggerPositions: [23, 26],
    inherent: 100 * player.shot * positionPotentials(player.position, 4)
  },
  {
    x: 22,
    y: 10,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 6,
    triggerPositions: [37],
    inherent: 80 * player.shot * positionPotentials(player.position, 6)
  },
  {
    x: 22,
    y: -10,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 3,
    triggerPositions: [32],
    inherent: 80 * player.shot * positionPotentials(player.position, 3)
  },
  {
    x: 29,
    y: 22,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 17,
    triggerPositions: [37],
    inherent: 80 * player.shot * positionPotentials(player.position, 17)
  },
  {
    x: 29,
    y: -22,
    space: SPACING,
    scoring: SHOOTING,
    gridPosition: 12,
    triggerPositions: [32],
    inherent: 80 * player.shot * positionPotentials(player.position, 12)
  },
  {
    x: 35,
    y: -24,
    space: CONTROL,
    scoring: SHOOTING,
    gridPosition: 22,
    triggerPositions: [34],
    inherent: 70 * player.shot * positionPotentials(player.position, 22)
  },
  {
    x: 35,
    y: 24,
    space: CONTROL,
    scoring: SHOOTING,
    gridPosition: 27,
    triggerPositions: [35],
    inherent: 70 * player.shot * positionPotentials(player.position, 27)
  },
  {
    x: 35,
    y: 18,
    space: CONTROL,
    scoring: SHOOTING,
    gridPosition: 26,
    triggerPositions: [5, 46],
    inherent: 80 * player.shot * positionPotentials(player.position, 26)
  },
  {
    x: 35,
    y: -18,
    space: CONTROL,
    scoring: SHOOTING,
    gridPosition: 23,
    triggerPositions: [4, 43],
    inherent: 80 * player.shot * positionPotentials(player.position, 23)
  }
];

function NGrid(player) {
  BaseGrid.call(this, player);

  this.addHotspots(nGridHotspots(player));
}

NGrid.prototype = Object.create(BaseGrid.prototype);
NGrid.prototype.constructor = NGrid;

module.exports = NGrid;
