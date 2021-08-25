import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
  },
  subtitle: {
    color: colors.lightGrey,
  },
  container: {
    flexDirection: "row",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
});

export default ListItem;
