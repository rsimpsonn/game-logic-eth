const mongoose = require("mongoose");

const LineupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  pg: {
    type: String
  },
  sg: {
    type: String
  },
  sf: {
    type: String
  },
  pf: {
    type: String
  },
  c: {
    type: String
  }
});

LineupSchema.pre("save", function(next) {
  var lineup = this;

  var id = lineup.name.trim().toLowerCase().replace(/ /g, "_");

  lineup.id = lineup.address + id;
  next();
});

const Lineup = mongoose.model("Lineup", LineupSchema);
module.exports = Lineup;
