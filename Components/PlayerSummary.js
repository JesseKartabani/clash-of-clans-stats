import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { IP } from "@env";
import { useNavigation } from "@react-navigation/native";

const PlayerSummary = () => {
  const navigation = useNavigation();
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
      // If player isnt found alert user then navigate to home screen
      if (data.reason == "notFound") {
        alert("Player Not Found");
        navigation.navigate("Clash of Clans Stats");
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserStats();
  }, []);

  return (
    <View>
      {userStats.name != undefined && (
        <Text style={styles.statTxt}>
          {userStats.name + ":  " + userStats.trophies}
        </Text>
      )}
    </View>
  );
};

export default PlayerSummary;

const styles = StyleSheet.create({});
