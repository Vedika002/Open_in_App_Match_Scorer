const express = require("express");
const app = express();

app.use(express.json());

var matches = [];
var past_matches = [];

//scripts for get reqs
app.get("/matches", async (req, res) => {
  try {
    res.json(matches);
  } catch (e) {
    res.status(500).json({ error: "Failed to retrieve matches" });
  }
});

app.get("/", async (req, res) => {
  res.send("Get to know all about the IPL matches!");
});
app.get("/matches/id/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let l_all_matches = [];
    if (matches.length > 0) l_all_matches = [...matches];
    if (past_matches.length > 0) l_all_matches = [...past_matches];

    let match_found = false;
    for (let i = 0; i < l_all_matches.length; i++) {
      if (l_all_matches[i].id == id) {
        res.send(l_all_matches[i]);
        match_found = true;
        break;
      }
    }
    if (!match_found) res.send("No match exists for the ID");
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve match details" });
  }
});

app.get("/matches/date/:date", async (req, res) => {
  const { date } = req.params;
  let l_all_matches = [];
  if (matches.length > 0) l_all_matches = [...matches];
  if (past_matches.length > 0) l_all_matches = [...past_matches];
  try {
    let match_found = false;
    for (let i = 0; i < l_all_matches.length; i++) {
      if (l_all_matches[i].date == date.toString()) {
        res.send(l_all_matches[i]);
        match_found = true;
        break;
      }
    }
    if (!match_found) res.send("No match exists for this Date");
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve matches" });
  }
});

app.get("/past-matches", async (req, res) => {
  try {
    res.json(past_matches);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve past matches" });
  }
});

app.get("/team-performance/:team", async (req, res) => {
  const { team } = req.params;
  let l_past_matches = [...past_matches];
  let wins = 0,
    losses = 0,
    total = 0;

  for (let i = 0; i < l_past_matches.length; i++) {
    if (l_past_matches[i].teams.includes(team)) total++;

    if (l_past_matches[i].winnerTeam == team) wins++;
  }
  losses = total - wins;
  try {
    res.json({ wins, losses });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve team's performance" });
  }
});

//scripts for post reqs
app.post("/matches", async (req, res) => {
  const { ...matchDetails } = req.body;
  const date = matchDetails.date;
  matchDetails.id = matches.length + 1;
  let l_matches = [...matches];
  console.log(matches.length);
  if (matches.length !== 0) {
    for (let i = 0; i < l_matches.length; i++) {
      if (l_matches[i].date == date) {
        return res
          .status(400)
          .json({ error: "Another match already exists for this date" });
      }
    }
  }

  try {
    l_matches.push(matchDetails);
    matches = [...l_matches];
    res
      .status(201)
      .json({ message: "Match details stored successfully", matches });
  } catch (error) {
    res.status(500).json({ error: "Failed to store match details" });
    console.log(error);
  }
});

app.post("/past-matches", async (req, res) => {
  const somePastMatch = req.body;
  const date = somePastMatch.date;
  const month = parseInt(date.substr(5, 7));
  const day = parseInt(date.substr(8, 10));
  somePastMatch.id = past_matches.length + 1;
  let l_past_matches = [...past_matches];
  console.log(month, day);

  if (l_past_matches.length !== 0) {
    for (let i = 0; i < l_past_matches.length; i++) {
      if (l_past_matches[i].date == date)
        return res
          .status(400)
          .json({ error: "Another match already exists for this date" });
    }
  }
  try {
    l_past_matches.push(somePastMatch);
    past_matches = [...l_past_matches];
    res
      .status(201)
      .json({ message: "Match details stored successfuly", past_matches });
  } catch (e) {
    res.status(500).json({ error: "Failed to store match details" });
    console.log(e);
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log(Server running at http://localhost/3000/);
});