const { SPACING, CONTROL, SHOOTING, DRIVE } = require("./constants");

function Coordinate(
  x,
  y,
  space,
  scoring,
  gridPosition,
  triggerPositions,
  inherent
) {
  this.x = x;
  this.y = y;
  this.space = space;
  this.scoring = scoring;
  this.gridPosition = gridPosition;
  this.triggerPositions = triggerPositions;
  this.inherent = inherent;

  this.distanceFrom = (x, y) => {
    return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
  };

  this.playersInRange = (offense, defense, range) => {
    var count = 0;

    offense.forEach(player => {
      if (this.distanceFrom(player.player.x, player.player.y) <= range) {
        count++;
      }
    });

    defense.forEach(player => {
      if (this.distanceFrom(player.player.x, player.player.y) <= range) {
        count++;
      }
    });

    return count;
  };
}

module.exports = Coordinate;
