import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <SafeAreaView>
        <View style={styles.navBarContainer}>
          <TouchableOpacity
            onPress={async () => {
              navigation.navigate("Clash of Clans Stats");
            }}
          >
            <Image
              style={styles.bannerLogo}
              source={require("../assets/clashLogo.png")}
            />
          </TouchableOpacity>
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
        height: 80,
      },
    }),
  },

  navBarContainer: {
    height: 60,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        height: 90,
      },
    }),
  },
});
