import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const StatSearch = () => {
  return (
    <ImageBackground
      style={styles.backgroundImg}
      resizeMode="fit"
      source={require("../assets/statSearchBackground.jpeg")}
    >
      {/* Player/Clan lookup */}
      <View>
        <Text>test</Text>
        <Text>test</Text>
      </View>
    </ImageBackground>
  );
};

export default StatSearch;

const styles = StyleSheet.create({
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
