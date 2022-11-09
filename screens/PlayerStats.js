import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NavBar from "../Components/NavBar";
import PlayerSummary from "../Components/PlayerSummary";

const PlayerStats = () => {
  return (
    <View>
      <NavBar />
      <PlayerSummary />
    </View>
  );
};

export default PlayerStats;

const styles = StyleSheet.create({});
