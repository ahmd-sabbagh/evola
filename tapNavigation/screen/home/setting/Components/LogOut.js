import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Logout from "./assets/logOut.svg";
import { FONTS } from "../../../../../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const LogOut = () => {
  const Navigate = useNavigation();
  const removeLoacalStorage = async () => {
    try {
      await AsyncStorage.removeItem("user");
      Navigate.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity onPress={removeLoacalStorage} style={styles.cont}>
      <Logout />
      <Text style={styles.text}>Log out</Text>
    </TouchableOpacity>
  );
};

export default LogOut;

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginVertical:32
  },
  text: {
    color: "#FD5D5D",
    fontFamily: FONTS.medium,
    fontSize: 15,
  },
});
