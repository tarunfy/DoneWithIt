import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import WelcomeScreen from "./app/screens/welcomeScreen";
import ViewImageScreen from "./app/screens/viewImageScreen";
import { Entypo } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    padding: 20,
    paddingTop: 60,
  },
});
