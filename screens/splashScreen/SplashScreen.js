import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import Screen from "./assets/Group 94903.png";
import Logo from "./assets/Group 86019.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({ navigation }) => {
  const GetData = () => {
    try {
      AsyncStorage.getItem("user").then((value) => {
        if (value != null) {
          navigation.navigate("tapHome");
        } else {
          navigation.navigate("Login");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={Screen}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Logo />
        <ActivityIndicator color={"#E0A387"} size={"large"} />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
