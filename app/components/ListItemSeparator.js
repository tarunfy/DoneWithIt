import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
function ListItemSeparator() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightDark,
  },
});

export default ListItemSeparator;
