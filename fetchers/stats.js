import axios from "axios";
import { IP } from "@env";

export const fetchPlayerStats = async () => {
  console.log("Fetching Player Stats");
  const response = await axios.get(`http://${IP}:4000/userSearchResults`);
  const playerStats = response.data;

  return playerStats;
};
