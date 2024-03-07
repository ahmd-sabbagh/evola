import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FeaturedProductsData } from "./data";
import CardFeature from "./CardFeature";
import { FONTS } from "../../../../constants/theme";

const FeaturedProducts = () => {
  return (
    <View style={{ marginVertical: 21 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.hText}>Featured products</Text>
        <TouchableOpacity>
          <Text style={[styles.hText, { color: "#666C89" }]}>View all</Text>
        </TouchableOpacity>
      </View>
      {/* Header */}
      {/* Products */}
      <View style={{ marginTop: 16 }}>
        <FlatList
          horizontal={true}
          data={FeaturedProductsData}
          contentContainerStyle={{ gap: 16 }}
          renderItem={({ item }) => <CardFeature item={item} />}
        />
      </View>
      {/* Products */}
    </View>
  );
};

export default FeaturedProducts;

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
