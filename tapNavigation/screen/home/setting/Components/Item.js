import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Arrow from "./assets/fi-rr-angle-small-left.svg";
import { FONTS } from "../../../../../constants/theme";

const Item = ({ icon, title, border = true, backColor, bottom = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.wallet,
        border
          ? { paddingTop: 14, borderTopWidth: 1, borderColor: "#E0E4F5" }
          : { paddingBottom: 14 },
        bottom && { paddingBottom: 14 },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.icon, { backgroundColor: backColor }]}>
          {icon}
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Arrow />
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  wallet: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#2D2E49",
    fontFamily: FONTS.medium,
    fontSize: 14,
    paddingHorizontal: 18,
  },
});
