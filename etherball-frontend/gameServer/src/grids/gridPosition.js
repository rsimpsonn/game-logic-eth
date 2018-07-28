const xLimits = [27, 34, 41, 48, 55, 60];
const yLimits = [-25, -20, -10, 0, 10, 20, 25, 30];

function calculatePosition(x, y) {
  var gridX;
  var gridY;

  var xIndex = 0;
  var yIndex = 0;

  while (!gridX) {
    if (Math.abs(x) <= xLimits[xIndex]) {
      gridX = xIndex;
    }
    xIndex++;
  }

  while (!gridY) {
    if (y <= yLimits[yIndex]) {
      gridY = yIndex + 1;
    }
    yIndex++;
  }

  return parseInt(gridX.toString() + gridY.toString());
}

module.exports = calculatePosition;
