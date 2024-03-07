import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Empty from "../assets/cart.svg";
import { FONTS } from "../../../../../constants/theme";

const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <View>
        <Empty fill="#E0A387" />
      </View>
      <Text style={styles.text}>Your cart is empty</Text>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
  },
  text: {
    fontSize: 15,
    fontFamily: FONTS.semiBold,
    color: "#E0A387",
  },
});
