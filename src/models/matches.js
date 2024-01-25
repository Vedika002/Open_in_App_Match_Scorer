const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const matchSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  date: Date,
  venue: String,
  teams: [String],
  players: [[String]],
});
matchSchema.plugin(uniqueValidator);

const pastMatchSchema = new mongoose.Schema({
  date: Date,
  venue: String,
  teams: [String],
  winningTeam: String,
  lossingTeam: String,
  players: [[String]],
  playerOftheMatch: String,
  playersPerformance: [
    {
      team: String,
      name: String,
      runs: Number,
      sixes: Number,
      fours: Number,
      out: Boolean,
    },
  ],
});

const Match = mongoose.model("Match", matchSchema);

const PastMatch = mongoose.model("PastMatch", pastMatchSchema);

module.exports = { Match, PastMatch };
