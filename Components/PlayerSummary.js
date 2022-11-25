import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
} from "react-native";
import React from "react";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { Icon } from "@rneui/base";
import { useQuery } from "@tanstack/react-query";
import { fetchPlayerStats } from "../fetchers/stats";

const PlayerSummary = () => {
  // Player data for users search
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    ["playerStats"],
    fetchPlayerStats
  );

  if (isLoading) {
    console.log("loading");
    return <Text>Loading summary</Text>;
  }

  if (isError) {
    console.log(error);
    return <Text>Error...</Text>;
  }

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
          <Text style={styles.playerName}>{data.name}</Text>
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

                <Text style={styles.statTxt}>{"TH " + data.townHallLevel}</Text>
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

                <Text style={styles.statTxt}>
                  {"BH " + data.builderHallLevel}
                </Text>
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

                <Text style={styles.statTxt}>{data.clan.name}</Text>
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

                <Text style={styles.statTxt}>{data.expLevel}</Text>
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

                <Text style={styles.statTxt}>{data.warStars}</Text>
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

                <Text style={styles.statTxt}>{data.trophies}</Text>
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

                <Text style={styles.statTxt}>
                  {data.legendStatistics.legendTrophies}
                </Text>
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

                <Text style={styles.statTxt}>{data.versusTrophies}</Text>
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

                <Text style={styles.statTxt}>{data.donations}</Text>
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

                <Text style={styles.statTxt}>{data.donationsReceived}</Text>
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

                <Text style={styles.statTxt}>{data.versusBattleWins}</Text>
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

                <Text style={styles.statTxt}>{data.attackWins}</Text>
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

                <Text style={styles.statTxt}>{data.defenseWins}</Text>
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
    borderRadius: 5,
    borderColor: "#455a64",
    margin: 3,
  },

  menuTriggerBackgroundGreen: {
    backgroundColor: "#4caf50",
    borderRadius: 5,
    borderColor: "#4caf50",
    margin: 3,
  },

  menuTriggerBackgroundRed: {
    backgroundColor: "red",
    borderRadius: 5,
    borderColor: "red",
    margin: 3,
  },

  menuTriggerBackgroundBlue: {
    backgroundColor: "#2196f3",
    borderRadius: 5,
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
