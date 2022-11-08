import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { IP } from "@env";
import axios from "axios";

const StatSearch = () => {
  const navigation = useNavigation();
  // Track users input
  const [text, setText] = useState("");

  // Validate user input then navigate to player stats screen
  function checkUserInput(input) {
    if (input.length < 8) {
      alert("Tag too short");
    }
    if (input.includes("#") == false) {
      alert("Missing #");
    } else {
      postUserInput();
      navigation.navigate("Player Stats");
    }
  }

  // Post user input to backend express server
  const postUserInput = () => {
    axios
      .post(`http://${IP}:4000/userSearch`, text)
      .then(() => console.log("input recorded"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ImageBackground
      style={styles.backgroundImg}
      resizeMode="fit"
      source={require("../assets/statSearchBackground.jpeg")}
    >
      {/* Player lookup */}
      <View style={styles.inputContainer}>
        <View style={styles.box}>
          <View style={styles.heading}>
            <Icon name="user" color="white" type="antdesign" />
            <Text style={styles.headingTxt}>SEARCH PLAYERS</Text>
          </View>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.textInput}
              placeholder="#Y9C92G2C (enter Tag)"
              onChangeText={(newText) => setText(newText.toUpperCase())}
              defaultValue={text}
              placeholderTextColor="white"
              autoCapitalize="characters"
            />
            <TouchableOpacity
              onPress={() => {
                checkUserInput(text);
              }}
            >
              <Icon name="arrowright" color="white" type="antdesign" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default StatSearch;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 25,
  },

  headingTxt: {
    color: "white",
    textDecorationLine: "underline",
    textDecorationColor: "gray",
    fontWeight: "700",
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
    paddingLeft: 40,
    paddingRight: 40,
    borderWidth: 1,
    borderRadius: 10,
    color: "white",
    minWidth: 200,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        padding: 15,
        paddingLeft: 75,
        paddingRight: 75,
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
