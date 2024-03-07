import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Clothes from "../assets/clothes.svg";
import Flower from "../assets/flowers.svg";
import Accessory from "../assets/accessory-2.svg";
import Arrow from "../assets/arrow.svg";
import { FONTS } from "../../../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Sections = () => {
const Navigate = useNavigation()
  return (
    <View style={{ marginTop: 11 }}>
      <Text style={styles.title}>Sections</Text>
      <View style={styles.cont}>
        {/* clothes */}
        <TouchableOpacity style={styles.iconCont}>
          <View style={[styles.icon, { backgroundColor: "#CABDFF" }]}>
            <Clothes />
          </View>
          <Text style={styles.text}>Clothes</Text>
        </TouchableOpacity>
        {/* clothes */}
        {/* flower */}
        <TouchableOpacity style={styles.iconCont}>
          <View style={[styles.icon, { backgroundColor: "#FFCFBD" }]}>
            <Flower />
          </View>
          <Text style={styles.text}>Perfumes</Text>
        </TouchableOpacity>
        {/* flower */}
        {/* Accessory */}
        <TouchableOpacity style={styles.iconCont}>
          <View style={[styles.icon, { backgroundColor: "#BDFFE8" }]}>
            <Accessory />
          </View>
          <Text style={styles.text}>Accessory</Text>
        </TouchableOpacity>
        {/* Accessory */}
        {/* Arrow */}
        <TouchableOpacity onPress={() => Navigate.navigate("Sections")} style={styles.iconCont}>
          <View
            style={[
              styles.icon,
              {
                backgroundColor: "#FAFAFA",
                borderWidth: 1,
                borderColor: "#ECECEC",
              },
            ]}
          >
            <Arrow />
          </View>
          <Text style={styles.text}>All</Text>
        </TouchableOpacity>
        {/* Arrow */}
      </View>
    </View>
  );
};

export default Sections;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: 15,
    color: "#172B4D",
  },
  cont: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 17,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconCont: {
    alignItems: "center",
    gap: 6,
  },
  icon: {
    width: 68,
    height: 68,
    borderRadius: 68,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: 12,
    color: "#172B4D",
  },
});
