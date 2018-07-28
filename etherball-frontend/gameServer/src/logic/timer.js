const { PG, SG, SF, PF, C } = require("./constants");

function Timer(endGame) {
  this.quarter = 1;
  this.timeRemainingInQuarter = 720;
  this.endGame = endGame;
}

Timer.prototype.timeOfTouch = function(confidence, position) {
  var time;
  if (position === "PG") {
    time = 3.5 + (Math.random() * 4 - 6 / (confidence / 8));
  } else if (position === "SG") {
    time = 4 + (Math.random() * 3 - 6 / (confidence / 8));
  } else if (position === "SF") {
    time = 3 + (Math.random() * 3 - 6 / (confidence / 8));
  } else if (position === "PF") {
    time = 2 + (Math.random() * 2 - 2 / (confidence / 8));
  } else {
    // position is C
    time = 2 + (Math.random() * 2 - 2 / (confidence / 8));
  }

  time = time > this.timeRemainingInQuarter
    ? this.timeRemainingInQuarter
    : time;

  this.timeRemainingInQuarter -= time;

  if (this.timeRemainingInQuarter === 0) {
    this.timeRemainingInQuarter = 720;
    this.quarter += 1;
    if (this.quarter > 4) {
      this.endGame();
    }
  }

  return time;
};

// TODO Fix for small confidence values

module.exports = Timer;
