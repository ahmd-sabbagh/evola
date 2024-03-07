import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import { FONTS } from "../../../../../constants/theme";

const Switcher = ({
  Icon,
  title,
  border = true,
  backColor,
  state,
  setState,
}) => {
  const toggleSwitch = () => setState((prv) => !prv);
  return (
    <View
      style={[
        styles.wallet,
        border
          ? { paddingTop: 14, borderTopWidth: 1, borderColor: "#E0E4F5" }
          : { paddingBottom: 14 },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
        <View style={[styles.icon, { backgroundColor: backColor }]}>
          {Icon}
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Switch
        trackColor={{ false: "#707070", true: "#5EBB5E" }}
        thumbColor={"white"}
        onChange={toggleSwitch}
        value={state}
      />
    </View>
  );
};

export default Switcher;

const styles = StyleSheet.create({
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
