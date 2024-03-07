import { StyleSheet, Text, View } from "react-native";
import React, {useEffect, useState } from "react";
import { FONTS } from "../../../../../constants/theme";
import Car from "../assets/Group 75313.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const Products = useSelector((state) => state.cart);
  const totalPriceProducts = Products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  const width = totalPriceProducts / 400 * 100
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Shopping cart</Text>
      <View style={styles.barIcon}>
        <View style={styles.icon}>
          <Car />
        </View>
        <Text style={styles.textCar}>
          Free shipping for products over 200 SAR
        </Text>
      </View>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.yellowBar,
            { width:`${width}%` },
          ]}
        ></View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: "white",
  },
  barIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
  },
  text: {
    fontSize: 20,
    fontFamily: FONTS.semiBold,
    color: "#172B4D",
  },
  textCar: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: "#666C89",
  },
  // Progress Bar
  progressBar: {
    height: 5,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#F2F2F2",
    marginTop: 9,
    overflow:"hidden"
  },
  yellowBar: {
    height: "100%",
    backgroundColor: "#F7DD4A",
    borderRadius: 8,
  },
});
