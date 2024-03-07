import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Arrow from "../../assets/arrow.svg";
import { useNavigation } from "@react-navigation/native";
import { FONTS } from "../../../constants/theme";

const HeaderBack = ({ title, pressHandler }) => {
  const Navigate = useNavigation();
  return (
    <View style={styles.contain}>
      <TouchableOpacity onPress={() => pressHandler()} style={styles.button}>
        <Arrow />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
  contain: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  button: {
    width: 35,
    height: 35,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontFamily:FONTS.bold,
    fontSize:14,
    color:"#2D3437"
  }
});
