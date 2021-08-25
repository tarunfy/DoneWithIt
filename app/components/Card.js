import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
function Card({ title, image, subtitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    fontWeight: "bold",
    color: colors.sec,
  },
});

export default Card;
