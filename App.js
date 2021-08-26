import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
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
export default function App() {
  return (
    <Screen>
      <ListItem
        title="Title"
        //subtitle="subtitile"
        ImageComponent={<Icon name="email" />}
      />
    </Screen>
  );
}
