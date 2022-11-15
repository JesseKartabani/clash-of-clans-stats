import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
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
    <ImageBackground
      style={styles.backgroundImg}
      source={require("../assets/statSearchBackground.jpeg")}
    >
      <View style={styles.container}>
        {/* Barbarian king image */}
        <Image style={styles.kingImg} source={require("../assets/king.png")} />

        {/* Player name */}
        <View>
          {userStats.name != undefined && (
            <Text style={styles.playerName}>{userStats.name}</Text>
          )}
        </View>

        {/* First row */}
        <View style={styles.row}>
          <Menu>
            {/* Player town hall level */}
            <MenuTrigger>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/townHall.png")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>
                    {"TH " + userStats.townHallLevel}
                  </Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions>
              <MenuOption>
                <Text style={styles.popupText}>Town Hall Level</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
          <Menu>
            {/* Player builder hall level */}
            <MenuTrigger>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/townHall.png")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>
                    {"BH " + userStats.builderHallLevel}
                  </Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions>
              <MenuOption>
                <Text style={styles.popupText}>Town Hall Level</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PlayerSummary;

const styles = StyleSheet.create({
  statTxt: {
    color: "white",
    fontSize: "18px",
  },

  menuTriggerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    margin: 2,
    marginTop: 8,
    backgroundColor: "#7e57c2",
    borderRadius: 15,
    borderColor: "#7e57c2",
  },

  icons: {
    width: 24,
    height: 24,
  },

  playerName: {
    fontSize: "30px",
    color: "white",
    fontWeight: "600",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "40px",
      },
    }),
  },

  container: {
    alignItems: "center",
    paddingTop: 10,
  },

  row: {
    flexDirection: "row",
  },

  backgroundImg: {
    width: "100%",
    height: 300,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        height: 500,
      },
    }),
  },

  kingImg: {
    //flex: 1,
    height: 100,
    width: 100,
    resizeMode: "contain",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        height: 175,
        width: 175,
      },
    }),
  },
});
