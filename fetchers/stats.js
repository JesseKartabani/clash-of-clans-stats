import axios from "axios";
import { IP } from "@env";

// Gets stats for users player search
export const fetchPlayerStats = async () => {
  console.log("Fetching Player Stats");
  const response = await axios.get(`http://${IP}:4000/userSearchResults`);
  const playerStats = response.data;

  return playerStats;
};

// Top 5 players based off their trophies
export const fetchTopTrophies = async () => {
  console.log("Fetching Top Trophies");
  const response = await axios.get(`http://${IP}:4000/top5`);
  const topTrophies = response.data;

  return topTrophies;
};

// Top 5 players based off their trophies
export const fetchTopVersusTrophies = async () => {
  console.log("Fetching Top Versus Trophies");
  const response = await axios.get(`http://${IP}:4000/versusTop5`);
  const topVersusTrophies = response.data;

  return topVersusTrophies;
};
