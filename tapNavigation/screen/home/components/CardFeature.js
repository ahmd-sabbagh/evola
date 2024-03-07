import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Star from "../assets/start.svg";
import Bag from "../assets/vuesax-linear-bag-2.svg";
import { FONTS } from "../../../../constants/theme";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../rtk/slices/addToCart";

const CardFeature = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={{ borderRadius: 8, overflow: "hidden" }}>
      <View style={styles.imageCont}>
        <Image style={styles.image} source={item.image} />
      </View>
      {/* Content */}
      <View style={styles.textContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price} EGY</Text>
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
          <Text style={{ color: "#2D3437", fontFamily: FONTS.bold }}>
            {item.rate}
          </Text>
        </View>
        {/* Rate */}
        <TouchableOpacity
          onPress={() => dispatch(addToCart({ ...item, key: item.id }))}
          style={styles.bag}
        >
          <Bag />
        </TouchableOpacity>
      </View>
      {/* Content */}
    </View>
  );
};

export default CardFeature;

const styles = StyleSheet.create({
  imageCont: {
    backgroundColor: "#ECE1E7",
  },
  image: {
    width: 208,
    height: 191,
    resizeMode: "cover",
  },
  textContent: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: "#2D3437",
  },
  price: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    color: "#2D3437",
  },
  bag: {
    position: "absolute",
    bottom: 12,
    right: 16,
    width: 43,
    height: 43,
    backgroundColor: "#E0A387",
    borderRadius: 43,
    justifyContent: "center",
    alignItems: "center",
  },
});
