import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";

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
          <Text>SEARCH PLAYERS</Text>
          <View style={styles.searchBar}>
            <TextInput
              styles={styles.textInput}
              placeholder="Find a Player (enter Tag)"
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
              placeholderTextColor="white"
              autoCapitalize="characters"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StatSearch;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#696969",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderWidth: 1,
    borderRadius: 10,
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

  box: {
    backgroundColor: "#222222",
    padding: 30,
    borderWidth: 1,
    borderRadius: 10,
  },

  textInput: {
    height: 40,
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
