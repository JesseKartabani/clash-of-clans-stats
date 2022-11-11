import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import mongoose from "mongoose";

// mongo db setup
mongoose.connect(
  "mongodb+srv://clashOfStats:Qa4JEvs0OQOiCWjv@cluster0.8op1t9g.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to db"));

const userInputSchema = new mongoose.Schema({
  token: String,
});

const Token = mongoose.model("Token", userInputSchema);

const API_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjYwMGMzZTMxLWZjZGItNDM0MC1iODVlLTFmMTA1ZTYxZjhhZiIsImlhdCI6MTY2NzMwMzYzOSwic3ViIjoiZGV2ZWxvcGVyL2JkNWRkYTBmLTkxYjEtMzcwZi1jODhlLWZlODQzYzBlY2E4NyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjExMC4xNDkuMTc5LjYxIl0sInR5cGUiOiJjbGllbnQifV19.WYmZJzeCX1QbghQ-y744BHsljJSWWkPeB4N8zcLVyYf9FhfHuXteBdF36qljc0vIDRw3iRckRHj3dGBuKmY-vQ";
const app = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Highest trophies globally limted to 5 responses
app.get("/top5", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.clashofclans.com/v1/locations/global/rankings/players?limit=5",
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    const json = await response.json();
    const globalRankingData = json;
    res.send(globalRankingData);
    console.log(globalRankingData);
  } catch (error) {
    console.error(error);
  }
});

// Highest versus trophies globally limted to 5 responses
app.get("/versusTop5", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.clashofclans.com/v1/locations/global/rankings/players-versus?limit=5",
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    const json = await response.json();
    const globalVersusRankingData = json;
    res.send(globalVersusRankingData);
    console.log(globalVersusRankingData);
  } catch (error) {
    console.error(error);
  }
});

// Get user search input and send it to data base
app.post("/userSearch", function (req, res) {
  const newSearch = req.body.token;
  Token.findByIdAndUpdate(
    { _id: "636db4ac5caf3d69fa49ac40" },
    { $set: { token: `${newSearch}` } },
    (err) => {
      if (err) return console.log(err);
    }
  );
});

// Use search input from mongo db to get individual player data
app.get("/userSearchResults", async (req, res) => {
  const userSearch = db
    .collection("tokens")
    .find()
    .toArray(async (err, results) => {
      const newSearch = results[0].token;
      try {
        const response = await fetch(
          `https://api.clashofclans.com/v1/players/%23${newSearch}`,
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );
        const json = await response.json();
        const search = json;
        res.send(search);
        console.log(search);
      } catch (error) {
        console.error(error);
      }
    });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
