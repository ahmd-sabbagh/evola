import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Heart from "../assets/heart-circle-linear.svg";
import Star from "../assets/start.svg";
import Bag from "../assets/vuesax-linear-bag-2.svg";
import { FONTS } from "../../../../constants/theme";

const CardLatest = ({ image, title, price, rate }) => {
  return (
    <ImageBackground style={styles.cont} source={image} resizeMode="contain">
      {/* Like */}
      <View>
        <Heart />
      </View>
      {/* Like */}
      {/* Content */}
      <View style={styles.textContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        {/* Rate */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            backgroundColor: "rgba(255, 197, 84, 0.2)",
            borderRadius: 20,
            width: 51,
            height: 24,
            marginTop: 9,
          }}
        >
          <Star />
          <Text style={{ color: "white", fontFamily: FONTS.bold }}>{rate}</Text>
        </View>
        {/* Rate */}
        <TouchableOpacity style={styles.bag}>
          <Bag />
        </TouchableOpacity>
      </View>
      {/* Content */}
    </ImageBackground>
  );
};

export default CardLatest;

const styles = StyleSheet.create({
  cont: {
    height: 291,
    width: 208,
    paddingVertical: 17,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: "white",
  },
  price: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    color: "white",
  },
  bag: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 43,
    height: 43,
    backgroundColor: "#E0A387",
    borderRadius: 43,
    justifyContent: "center",
    alignItems: "center",
  },
});
