import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS } from "../../../../../constants/theme";

const ContainerItem = ({ children, title }) => {
  return (
    <View style={styles.acc}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cont}>{children}</View>
    </View>
  );
};

export default ContainerItem;

const styles = StyleSheet.create({
  acc: {
    marginTop: 32,
  },
  title: {
    color: "#666C89",
    fontSize: 15,
    fontFamily: FONTS.semiBold,
  },
  cont: {
    backgroundColor: "white",
    paddingVertical: 19,
    paddingHorizontal: 15,
    borderRadius: 11,
    marginTop: 16,
  },
});
