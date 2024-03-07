import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HeaderBack from "../Components/HeaderBack";
import { LinearGradient } from "expo-linear-gradient";
import Section from "./Section";
import { paddingSafeArea } from "../../../constants/theme";

const Sections = ({ navigation: { goBack } }) => {
  const pressHandler = () => {
    goBack("home");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgba(252,241,236,0.8)", "rgba(241,237,251,0.5)"]}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, paddingHorizontal: paddingSafeArea, paddingVertical: 20 }}>
          <HeaderBack title={"Sections"} pressHandler={pressHandler} />
          <Section />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Sections;

const styles = StyleSheet.create({});
