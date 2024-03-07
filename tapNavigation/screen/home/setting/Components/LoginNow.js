import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FONTS } from "../../../../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const LoginNow = () => {
  const Navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => Navigate.navigate("Login")}
      style={styles.button}
    >
      <Text style={styles.text}>Log in now</Text>
    </TouchableOpacity>
  );
};

export default LoginNow;

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderWidth: 1,
    borderColor: "#824043",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    color: "#824043",
  },
});
