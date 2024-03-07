import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FONTS } from "../../../../../constants/theme";

import Wallet from "./assets/wallet-15.svg";
import Gift from "./assets/gift-box-with-a-bow.svg";
import Arrow from "./assets/fi-rr-angle-small-left.svg";

const AccountInfo = () => {
  return (
    <View style={styles.acc}>
      <Text style={styles.title}>Account Information</Text>
      <View style={styles.cont}>
        {/* Wallet */}
        <TouchableOpacity style={[styles.wallet, { paddingBottom: 14 }]}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
            <View style={[styles.icon, { backgroundColor: "#65C498" }]}>
              <Wallet />
            </View>
            <Text style={styles.text}>The wallet </Text>
          </View>
          <Arrow />
        </TouchableOpacity>
        {/* Gift */}
        <TouchableOpacity
          style={[
            styles.wallet,
            { paddingTop: 14, borderTopWidth: 1, borderColor: "#E0E4F5" },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
            <View style={[styles.icon, { backgroundColor: "#E6A559" }]}>
              <Gift />
            </View>
            <Text style={styles.text}>Gift coupons</Text>
          </View>
          <Arrow />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountInfo;

const styles = StyleSheet.create({
  acc: {
    marginTop: 32,
  },
  title: {
    color: "#666C89",
    fontSize: 15,
    fontFamily: FONTS.semiBold,
  },
  cont: {
    backgroundColor: "white",
    paddingVertical: 19,
    paddingHorizontal: 15,
    borderRadius: 11,
    marginTop: 16,
  },
  wallet: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#2D2E49",
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
});
