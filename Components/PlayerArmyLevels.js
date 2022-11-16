import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { IP } from "@env";

const PlayerArmyLevels = () => {
  // Player data for users search
  const [userStats, setUserStats] = useState([]);
  const getUserStats = async () => {
    try {
      const response = await fetch(`http://${IP}:4000/userSearchResults`, {
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await response.json();
      const data = json;
      setUserStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserStats();
  }, []);

  return (
    <View>
      <Text>PlayerArmyLevels</Text>
    </View>
  );
};

export default PlayerArmyLevels;

const styles = StyleSheet.create({});
