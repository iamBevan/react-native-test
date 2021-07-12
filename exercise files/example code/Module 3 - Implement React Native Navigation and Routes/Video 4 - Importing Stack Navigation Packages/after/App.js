import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ImageScreen from "./src/screens/ImageScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi There or Yahoo!</Text> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});