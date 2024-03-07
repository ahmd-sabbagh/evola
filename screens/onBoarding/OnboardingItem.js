import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { FONTS } from "../../constants/theme";

export default function OnboardingItem({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[Styles.container, { width ,paddingHorizontal:20}]}>
      <Image
        source={item.img}
        style={[Styles.image, { width: width - 40, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={Styles.title}>{item.title}</Text>
        <Text style={Styles.disc}>{item.desc}</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 28,
    color: "#3C191A",
    textAlign: "center",
    marginBottom: 10,
  },
  disc: {
    fontFamily: FONTS.light,
    textAlign: "center",
    color: "#E0A387",
    paddingHorizontal: 24,
  },
});
