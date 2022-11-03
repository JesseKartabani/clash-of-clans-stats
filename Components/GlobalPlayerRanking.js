import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import React from "react";

const GlobalPlayerRanking = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Player Rankings</Text>
    </SafeAreaView>
  );
};

export default GlobalPlayerRanking;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222222",
  },

  headingText: {
    color: "white",
    fontSize: "24px",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 8,
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        fontSize: "160%",
      },
    }),
  },
});
