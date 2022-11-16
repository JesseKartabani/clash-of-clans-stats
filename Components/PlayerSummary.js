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
import { Icon } from "@rneui/base";
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
          {/* Player town hall level */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundPurple}>
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

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Town Hall Level</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>

          {/* Player builder hall level */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundPurple}>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/builderHall.png")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>
                    {"BH " + userStats.builderHallLevel}
                  </Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Builder Town Hall Level</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>

          {/* Name of clan player is in */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundPurple}>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/clanBanner.png")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>{userStats.clan.name}</Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Clan</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>

        {/* Second row */}
        <View style={styles.row}>
          {/* Players experience level */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundBlue}>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/experience.png")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>{userStats.expLevel}</Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Experience Level</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>

          {/* Players war stars */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundBlue}>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/whiteStar.png")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>{userStats.warStars}</Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>War Stars</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>

          {/* Players trophies */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundBlue}>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/trophy.jpg")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>{userStats.trophies}</Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Trophies</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>

          {/* Players legend trophies */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundBlue}>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/legendTrophie.png")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>
                    {userStats.legendStatistics.legendTrophies}
                  </Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Legend Trophies</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>

        {/* third row */}
        <View style={styles.row}>
          {/* Players versus trophies */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundBlue}>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/versus-trophy.jpg")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>{userStats.versusTrophies}</Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Versus Trophies</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>

          {/* Troop dontated by player */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundGreen}>
              <View style={styles.menuTriggerContainer}>
                <Icon name="arrowup" color="white" type="antdesign" />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>{userStats.donations}</Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Troops Donated</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>

          {/* Players donations received */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundRed}>
              <View style={styles.menuTriggerContainer}>
                <Icon name="arrowdown" color="white" type="antdesign" />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>
                    {userStats.donationsReceived}
                  </Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Donations Received</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>

          {/* Players versus battle wins */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundBlue}>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/crossingSwords.png")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>
                    {userStats.versusBattleWins}
                  </Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Versus Battle Wins</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>

        {/* Fourth row */}
        <View style={styles.row}>
          {/* Player attack wins */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundDarkBlue}>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/crossingSwords.png")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>{userStats.attackWins}</Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Attack Wins</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>

          {/* Players defense wins */}
          <Menu>
            <MenuTrigger style={styles.menuTriggerBackgroundDarkBlue}>
              <View style={styles.menuTriggerContainer}>
                <Image
                  style={styles.icons}
                  source={require("../assets/shield.jpg")}
                />
                {userStats.name != undefined && (
                  <Text style={styles.statTxt}>{userStats.defenseWins}</Text>
                )}
              </View>
            </MenuTrigger>

            <MenuOptions style={styles.menuOptions}>
              <MenuOption>
                <Text style={styles.popupText}>Defense Wins</Text>
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
  menuTriggerBackgroundDarkBlue: {
    backgroundColor: "#455a64",
    borderRadius: 15,
    borderColor: "#455a64",
    margin: 3,
  },

  menuTriggerBackgroundGreen: {
    backgroundColor: "#4caf50",
    borderRadius: 15,
    borderColor: "#4caf50",
    margin: 3,
  },

  menuTriggerBackgroundRed: {
    backgroundColor: "red",
    borderRadius: 15,
    borderColor: "red",
    margin: 3,
  },

  menuTriggerBackgroundBlue: {
    backgroundColor: "#2196f3",
    borderRadius: 15,
    borderColor: "#2196f3",
    margin: 3,
  },

  menuTriggerBackgroundPurple: {
    backgroundColor: "#7e57c2",
    borderRadius: 15,
    borderColor: "#7e57c2",
    margin: 3,
  },

  popupText: {
    color: "white",
    textAlign: "center",
  },

  menuOptions: {
    backgroundColor: "black",
  },

  statTxt: {
    fontSize: "18px",
    color: "white",
  },

  menuTriggerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    margin: 2,
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
