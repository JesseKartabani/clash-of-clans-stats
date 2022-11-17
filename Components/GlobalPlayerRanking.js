import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
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

      <ScrollView style={styles.flatList}>
        {/* Top 5 players by trophies */}
        <View style={styles.catergoryContainer}>
          <View style={styles.catergoryHeadingContainer}>
            <Text style={styles.catergoryHeading}>
              <Image
                style={styles.trophieImg}
                source={require("../assets/trophy.jpg")}
              />{" "}
              Trophies
            </Text>
          </View>
          {/* Name and trophies */}
          {topTrophies.items != undefined && (
            <Text style={styles.statTxt}>
              {topTrophies.items[0].name +
                ":  " +
                topTrophies.items[0].trophies}
            </Text>
          )}
          {topTrophies.items != undefined && (
            <Text style={styles.statTxt}>
              {topTrophies.items[1].name +
                ":  " +
                topTrophies.items[1].trophies}
            </Text>
          )}
          {topTrophies.items != undefined && (
            <Text style={styles.statTxt}>
              {topTrophies.items[2].name +
                ":  " +
                topTrophies.items[2].trophies}
            </Text>
          )}
          {topTrophies.items != undefined && (
            <Text style={styles.statTxt}>
              {topTrophies.items[3].name +
                ":  " +
                topTrophies.items[3].trophies}
            </Text>
          )}
          {topTrophies.items != undefined && (
            <Text style={styles.statTxt}>
              {topTrophies.items[4].name +
                ":  " +
                topTrophies.items[4].trophies}
            </Text>
          )}
        </View>

        {/* Top 5 players by versus trophies */}
        <View style={styles.catergoryContainer}>
          <View style={styles.catergoryHeadingContainer}>
            <Text style={styles.catergoryHeading}>
              <Image
                style={styles.trophieImg}
                source={require("../assets/versus-trophy.jpg")}
              />{" "}
              Versus Trophies
            </Text>
          </View>
          {/* Name and trophies */}
          {topVersusTrophies.items != undefined && (
            <Text style={styles.statTxt}>
              {topVersusTrophies.items[0].name +
                ":  " +
                topVersusTrophies.items[0].versusTrophies}
            </Text>
          )}
          {topVersusTrophies.items != undefined && (
            <Text style={styles.statTxt}>
              {topVersusTrophies.items[1].name +
                ":  " +
                topVersusTrophies.items[1].versusTrophies}
            </Text>
          )}
          {topVersusTrophies.items != undefined && (
            <Text style={styles.statTxt}>
              {topVersusTrophies.items[2].name +
                ":  " +
                topVersusTrophies.items[2].versusTrophies}
            </Text>
          )}
          {topVersusTrophies.items != undefined && (
            <Text style={styles.statTxt}>
              {topVersusTrophies.items[3].name +
                ":  " +
                topVersusTrophies.items[3].versusTrophies}
            </Text>
          )}
          {topVersusTrophies.items != undefined && (
            <Text style={styles.statTxt}>
              {topVersusTrophies.items[4].name +
                ":  " +
                topVersusTrophies.items[4].versusTrophies}
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GlobalPlayerRanking;

const styles = StyleSheet.create({
  flatList: {
    alignSelf: "center",
    width: "90%",
    maxWidth: 600,
  },

  statTxt: {
    color: "white",
    fontSize: "14px",
    paddingBottom: 10,
    fontWeight: "500",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "18px",
      },
    }),
  },

  catergoryHeadingContainer: {
    alignItems: "center",
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
    width: "100%",
    backgroundColor: "#333333",
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "gray",
    padding: 15,
    alignSelf: "center",
    marginBottom: 10,
  },

  container: {
    width: "100%",
    backgroundColor: "#111111",
    alignItems: "center",
    ...Platform.select({
      ios: {},
      android: {},
      default: {},
    }),
  },

  headingText: {
    color: "white",
    fontSize: "26px",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "28px",
        marginTop: 20,
        marginBottom: 20,
      },
    }),
  },
});
