import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import Parent from "./components/Parent"

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Parent refs={"parent"}/>        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default HomeScreen;
