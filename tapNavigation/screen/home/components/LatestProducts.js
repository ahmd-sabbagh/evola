import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FONTS } from "../../../../constants/theme";
import { latestProduct } from "./data";
import CardLatest from "./CardLatest";

const LatestProducts = () => {
  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.hText}>Latest products</Text>
        <TouchableOpacity>
          <Text style={[styles.hText, { color: "#666C89" }]}>View all</Text>
        </TouchableOpacity>
      </View>
      {/* Header */}
      {/* Products */}
      <View style={{marginTop:16}}>
        <FlatList
          horizontal={true}
          data={latestProduct}
          contentContainerStyle={{gap :16}}
          renderItem={({ item }) => <CardLatest {...item} />}
        />
      </View>
      {/* Products */}
    </View>
  );
};

export default LatestProducts;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hText: {
    fontFamily: FONTS.semiBold,
    fontSize: 15,
    color: "#172B4D",
  },
});
