import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";
import React from "react";

const NavBar = () => {
  return (
    <View style={styles.background}>
      <SafeAreaView>
        <View style={styles.navBarContainer}>
          <Image
            style={styles.bannerLogo}
            source={require("../assets/clashLogo.png")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#222222",
  },

  bannerLogo: {
    flex: 1,
    width: 120,
    height: 60,
    marginLeft: 30,
    ...Platform.select({
      ios: {
        marginBottom: 10,
      },
      android: {
        marginBottom: 10,
      },
      default: {
        width: 175,
      },
    }),
  },

  navBarContainer: {
    height: 60,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        height: 80,
      },
    }),
  },
});
