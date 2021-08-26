import "react-native-gesture-handler";
import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  subtitle,
  image,
  onPress,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image source={image} style={styles.img} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableNativeFeedback>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "700",
  },
  subtitle: {
    color: colors.lightGrey,
  },
  container: {
    flexDirection: "row",
    padding: 15,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});

export default ListItem;
