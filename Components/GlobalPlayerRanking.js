import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { API_TOKEN } from "@env";

const GlobalPlayerRanking = () => {
  // fetch data
  const [stats, setStats] = useState([]);
  const getPlayerStats = async () => {
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
      const data = json;
      setStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlayerStats();
    //console.log(stats.items[0].name);
  }, []);

  // stats.items[0] = rank 1 player

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Player Rankings</Text>
      {/*<Text>{stats.items[0].name}</Text> */}
    </SafeAreaView>
  );
};

export default GlobalPlayerRanking;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222222",
  },

  headingText: {
    color: "white",
    fontSize: "24px",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 8,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "160%",
      },
    }),
  },
});
