import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NavBar from "../Components/NavBar";
import StatSearch from "../Components/StatSearch";
import GlobalPlayerRanking from "../Components/GlobalPlayerRanking";

const HomeScreen = () => {
  return (
    <View>
      <NavBar />
      <StatSearch />
      <GlobalPlayerRanking />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
