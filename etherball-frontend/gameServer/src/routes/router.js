const express = require("express");
const router = express.Router();

const Game = require("../logic/game");

const Lineup = require("../models/lineup");

router.get("/", (req, res) => {
  res.send("Welcome to Etherball!");
});

router.post("/makeLineup", (req, res) => {
  const lineupData = {
    name: req.body.name,
    address: req.body.address,
    id: req.body.id
  };

  const lineup = new Lineup(lineupData);

  lineup.save((err, lineup) => {
    if (err) console.log(err);
    res.status(201);
    res.json(lineup);
  });
});

router.post("/editLineup", (req, res) => {
  Lineup.findOne({ address: req.body.address, id: req.body.id })
    .update(req.body)
    .then(data => {
      res.status(201);
      res.json(data);
    });
});

router.post("/removeLineup", (req, res) => {
  Lineup.findOne({ address: req.body.address, id: req.body.id })
    .remove()
    .then(data => {
      res.status(201);
      res.json(data);
    });
});

router.post("/getLineups", (req, res) => {
  Lineup.find({ address: req.body.address }, (err, data) => {
    if (err) console.log(err);
    res.status(201);
    const game = new Game();
    res.json(data);
  });
});

module.exports = router;
