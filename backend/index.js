import express from "express";
import fetch from "node-fetch";
import cors from "cors";

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

// Get user search input
app.post("/userSearch", function (req, res) {
  var newSearch = req.body;
  console.log(newSearch);
});
console.log(newSearch);
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
