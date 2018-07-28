const BearLoader = require("./bear");
const BunnyLoader = require("./bunny");
const TurtleLoader = require("./turtle");

const characterAnimations = {
  bear: [
    BearLoader.Right,
    BearLoader.Forward,
    BearLoader.Left,
    BearLoader.Back
  ],
  bunny: [
    BunnyLoader.Right,
    BunnyLoader.Forward,
    BunnyLoader.Left,
    BunnyLoader.Back
  ],
  turtle: [
    TurtleLoader.Right,
    TurtleLoader.Forward,
    TurtleLoader.Left,
    TurtleLoader.Back
  ]
};

export default characterAnimations;
