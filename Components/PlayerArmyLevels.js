import { StyleSheet, Text, View, Platform, Image } from "react-native";
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
        {/* Barbarian king */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/heroes/barbarianHero.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.heroes[0].level}</Text>
            )}
          </View>
        </Text>

        {/* Archer queen*/}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/heroes/archerHero.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.heroes[1].level}</Text>
            )}
          </View>
        </Text>
      </View>
    </View>
  );
};

export default PlayerArmyLevels;

const styles = StyleSheet.create({
  unitContainer: {
    marginRight: 10,
  },

  border: {
    backgroundColor: "#01579b",
    borderRadius: 10,
    borderColor: "#01579b",
    paddingLeft: 6,
    paddingRight: 6,
  },

  statText: {
    color: "white",
    fontSize: "12px",
    textAlign: "center",
    fontWeight: "700",
  },

  images: {
    height: 38,
    width: 38,
    borderRadius: 20,
  },

  container: {
    backgroundColor: "#222",
    flexDirection: "row",
    paddingLeft: 15,
  },

  subHeadingText: {
    paddingLeft: 15,
    paddingTop: 6,
    paddingBottom: 6,
    color: "#FFFFFFB3",
    fontSize: "16px",
    backgroundColor: "#222",
    fontWeight: "700",
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
