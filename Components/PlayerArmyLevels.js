import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ScrollView,
} from "react-native";
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
      <ScrollView
        style={styles.container}
        centerContent={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        paddingTop={5}
      >
        {/* Barbarian king hero */}
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

        {/* Archer queen hero*/}
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

        {/* Grand warden hero*/}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/heroes/grandWardenHero.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.heroes[2].level}</Text>
            )}
          </View>
        </Text>

        {/* Royal champion hero*/}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/heroes/royalChampionHero.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.heroes[4].level}</Text>
            )}
          </View>
        </Text>

        {/* Battle machine hero*/}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/heroes/battleMachineHero.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.heroes[3].level}</Text>
            )}
          </View>
        </Text>
      </ScrollView>

      {/* Pets sub heading */}
      <Text style={styles.subHeadingText}>Pets</Text>

      {/* All players pets levels */}
      <ScrollView
        style={styles.container}
        centerContent={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        paddingTop={5}
      >
        {/* L.A.S.S.I pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/LASSI.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.troops[57].level}</Text>
            )}
          </View>
        </Text>

        {/* Electro owl pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/electroOwl.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.troops[59].level}</Text>
            )}
          </View>
        </Text>

        {/* Mighty yak pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/mightyYak.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.troops[58].level}</Text>
            )}
          </View>
        </Text>

        {/* Unicorn pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/unicorn.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.troops[60].level}</Text>
            )}
          </View>
        </Text>

        {/* Phoenix pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/phoenix.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.troops[61].level}</Text>
            )}
          </View>
        </Text>

        {/* Poison lizard pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/poisonLizard.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.troops[62].level}</Text>
            )}
          </View>
        </Text>

        {/* Diggy pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/diggy.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.troops[63].level}</Text>
            )}
          </View>
        </Text>

        {/* Frosty pet */}
        <Text style={styles.unitContainer}>
          <Image
            style={styles.images}
            source={require("../assets/pets/frosty.png")}
          />
          <View style={styles.border}>
            {userStats.name != undefined && (
              <Text style={styles.statText}>{userStats.troops[64].level}</Text>
            )}
          </View>
        </Text>
      </ScrollView>
    </View>
  );
};

export default PlayerArmyLevels;

const styles = StyleSheet.create({
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
    height: 40,
    width: 40,
    borderRadius: 20,
  },

  container: {
    backgroundColor: "#222",
    flexDirection: "row",
  },

  subHeadingText: {
    paddingLeft: 15,
    paddingTop: 6,
    paddingBottom: 6,
    color: "#FFFFFFB3",
    fontSize: "16px",
    backgroundColor: "#222",
    fontWeight: "700",
    textAlign: "centerLeft",
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
