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
  // fetch data
  const [stats, setStats] = useState([]);
  const getPlayerStats = async () => {
    try {
      const response = await fetch(`http://${IP}:4000/top5`, {
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await response.json();
      const data = json;
      setStats(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlayerStats();
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
        {stats.items != undefined && (
          <Text style={styles.statTxt}>
            {stats.items[0].name + ":  " + stats.items[2].trophies}
          </Text>
        )}
        {stats.items != undefined && (
          <Text style={styles.statTxt}>
            {stats.items[1].name + ":  " + stats.items[1].trophies}
          </Text>
        )}
        {stats.items != undefined && (
          <Text style={styles.statTxt}>
            {stats.items[2].name + ":  " + stats.items[2].trophies}
          </Text>
        )}
        {stats.items != undefined && (
          <Text style={styles.statTxt}>
            {stats.items[3].name + ":  " + stats.items[3].trophies}
          </Text>
        )}
        {stats.items != undefined && (
          <Text style={styles.statTxt}>
            {stats.items[4].name + ":  " + stats.items[4].trophies}
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
    fontSize: "16px",
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
    backgroundColor: "#5A5A5A",
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
    backgroundColor: "#222222",
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
