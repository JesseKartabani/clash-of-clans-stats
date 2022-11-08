import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { IP } from "@env";

const GlobalPlayerRanking = () => {
  // fetch top 5 players based off trophies globally
  const [topTrophies, setTopTrophies] = useState([]);
  const getPlayerTopTrophies = async () => {
    try {
      const response = await fetch(`http://${IP}:4000/top5`, {
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await response.json();
      const data = json;
      setTopTrophies(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // fetch top 5 players based off versus trophies globally
  const [topVersusTrophies, setTopVersusTrophies] = useState([]);
  const getPlayerTopVersusTrophies = async () => {
    try {
      const response = await fetch(`http://${IP}:4000/versusTop5`, {
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await response.json();
      const data = json;
      setTopVersusTrophies(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlayerTopTrophies();
    getPlayerTopVersusTrophies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Heading */}
      <Text style={styles.headingText}>Player Rankings</Text>

      {/* Top 5 players by trophies */}
      <View style={styles.catergoryContainer}>
        <View style={styles.catergoryHeadingContainer}>
          <Text style={styles.catergoryHeading}>
            <Image
              style={styles.trophieImg}
              source={require("../assets/trophy.jpg")}
            />
            Trophies
          </Text>
        </View>
        {/* Name and trophies */}
        {topTrophies.items != undefined && (
          <Text style={styles.statTxt}>
            {topTrophies.items[0].name + ":  " + topTrophies.items[2].trophies}
          </Text>
        )}
        {topTrophies.items != undefined && (
          <Text style={styles.statTxt}>
            {topTrophies.items[1].name + ":  " + topTrophies.items[1].trophies}
          </Text>
        )}
        {topTrophies.items != undefined && (
          <Text style={styles.statTxt}>
            {topTrophies.items[2].name + ":  " + topTrophies.items[2].trophies}
          </Text>
        )}
        {topTrophies.items != undefined && (
          <Text style={styles.statTxt}>
            {topTrophies.items[3].name + ":  " + topTrophies.items[3].trophies}
          </Text>
        )}
        {topTrophies.items != undefined && (
          <Text style={styles.statTxt}>
            {topTrophies.items[4].name + ":  " + topTrophies.items[4].trophies}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default GlobalPlayerRanking;

const styles = StyleSheet.create({
  statTxt: {
    color: "white",
    fontSize: "14px",
    paddingLeft: 6,
    paddingBottom: 8,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "18px",
        marginBottom: 10,
      },
    }),
  },

  catergoryHeadingContainer: {
    alignItems: "center",
    //flexDirection: "row",
    paddingBottom: 10,
  },

  catergoryHeading: {
    color: "white",
    alignSelf: "center",
    fontWeight: "600",
    fontSize: "22px",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "24px",
      },
    }),
  },

  trophieImg: {
    width: 20,
    height: 20,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        width: 32,
        height: 32,
      },
    }),
  },

  catergoryContainer: {
    backgroundColor: "#333333",
    width: "50%",
    height: "50%",
    paddingTop: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "gray",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        width: "25%",
        height: "50%",
      },
    }),
  },

  container: {
    backgroundColor: "#111111",
    alignItems: "center",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        height: "100%",
      },
    }),
  },

  headingText: {
    color: "white",
    fontSize: "26px",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "28px",
        marginBottom: 15,
      },
    }),
  },
});
