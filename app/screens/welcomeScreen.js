import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppButton from "../components/AppButton";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.logoText}>Sell Your Shits</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="sec" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonContainer: { padding: 20, width: "100%" },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 25,
    fontWeight: "700",
    letterSpacing: 3,
    paddingVertical: 20,
  },
});
