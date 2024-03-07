import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { data } from "./data";

const width = Dimensions.get("window").width;
const gapWidth = (width - 292) / 3;
const Section = () => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity style={styles.button} key={item.id}>
          <View style={[styles.cont, { backgroundColor: item.color }]}>
            {item.icon}
          </View>
          <Text style={{ fontSize: 12 }}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
    rowGap: 32,
    columnGap: gapWidth,
    marginTop: 32,
  },
  cont: {
    width: 68,
    height: 68,
    borderRadius: 68,
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  button: {
    alignItems: "center",
    gap: 6,
  },
});
