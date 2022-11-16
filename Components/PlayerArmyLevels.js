import { StyleSheet, Text, View, Platform } from "react-native";
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
      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}> Army </Text>
      </View>

      {/* Heroes sub heading */}
      <Text style={styles.subHeadingText}>Heroes</Text>

      {/* All players heroes levels */}
      <View style={styles.container}>
        <Text>aaa</Text>
        <Text>bbb</Text>
      </View>
    </View>
  );
};

export default PlayerArmyLevels;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    flexDirection: "row",
  },

  subHeadingText: {
    paddingLeft: 12,
    paddingTop: 6,
    paddingBottom: 6,
    color: "#FFFFFFB3",
    fontSize: "16px",
    backgroundColor: "#222",
  },

  headingContainer: {
    backgroundColor: "#121212",
    height: 60,
    justifyContent: "center",
  },

  headingText: {
    color: "white",
    textAlign: "center",
    fontSize: "26px",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "28px",
      },
    }),
  },
});
