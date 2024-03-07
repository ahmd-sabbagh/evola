import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../../../../constants/theme";
import { useSelector } from "react-redux";

const Footer = () => {
  const Products = useSelector((state) => state.cart);
  const totalPriceProducts = Products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  const shiping = Products.length * 50;
  const totlaPrice = totalPriceProducts + shiping
  // console.log(totlaPrice / 400 * 100);
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>Order summary</Text>
      <View style={styles.viewData}>
        {/* Total */}
        <View style={styles.total}>
          <Text style={styles.textTotal}>Total</Text>
          <Text style={styles.textTotal}>{totalPriceProducts} EGY</Text>
        </View>
        {/* Shipping */}
        <View style={styles.total}>
          <Text style={styles.textTotal}>Shipping</Text>
          <Text style={styles.textTotal}>{shiping} EGY</Text>
        </View>
        {/* Total Tax */}
        <View style={styles.total}>
          <Text style={styles.textTax}>Final total including tax</Text>
          <Text style={styles.textTax}>{totlaPrice} EGY</Text>
        </View>
        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Complete the order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    marginTop: 8,
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 15,
    fontFamily: FONTS.semiBold,
    color: COLORS.main,
  },
  viewData: {
    backgroundColor: "white",
    paddingHorizontal: 17,
    paddingTop: 16,
    paddingBottom: 9,
    marginTop: 12,
    gap: 12,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTotal: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.main,
  },
  textTax: {
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.main,
  },
  // button
  button: {
    backgroundColor: "#935154",
    height: 60,
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
