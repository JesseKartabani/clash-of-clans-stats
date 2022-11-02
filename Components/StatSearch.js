import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/base";

const StatSearch = () => {
  // Track users input
  const [text, setText] = useState("");

  return (
    <ImageBackground
      style={styles.backgroundImg}
      resizeMode="fit"
      source={require("../assets/statSearchBackground.jpeg")}
    >
      {/* Player/Clan lookup */}
      <View style={styles.inputContainer}>
        <View style={styles.box}>
          <View style={styles.heading}>
            <Icon name="user" color="white" type="antdesign" />
            <Text style={styles.headingTxt}>SEARCH PLAYERS</Text>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="Find a Player (enter Tag)"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
            placeholderTextColor="white"
            autoCapitalize="characters"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default StatSearch;

const styles = StyleSheet.create({
  headingTxt: {
    color: "white",
    textDecorationLine: "underline",
    textDecorationColor: "gray",
  },

  heading: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 4,
    ...Platform.select({
      ios: {},
      android: {},
      default: {},
    }),
  },

  box: {
    backgroundColor: "#222222",
    padding: 20,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },

  textInput: {
    backgroundColor: "#696969",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        padding: 15,
        paddingLeft: 150,
        paddingRight: 150,
      },
    }),
  },

  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        height: 500,
      },
    }),
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
});
