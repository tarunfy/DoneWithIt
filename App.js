import React from "react";
//import {
//  View,
//  StyleSheet,
//  Text,
//  Platform,
//  SafeAreaView,
//  StatusBar,
//} from "react-native";
import WelcomeScreen from "./app/screens/welcomeScreen";
import ViewImageScreen from "./app/screens/viewImageScreen";
import { Entypo } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import { TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
export default function App() {
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
