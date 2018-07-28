const NGrid = require("./n");
const AGrid = require("./a");
const WGrid = require("./w");
const JGrid = require("./j");

const typeGrids = {
  a: AGrid,
  j: JGrid,
  n: NGrid,
  w: WGrid
};

module.exports = typeGrids;
