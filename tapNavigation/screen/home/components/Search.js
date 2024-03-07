import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import SearchIcon from "../../../assets/Path 104746.svg";

const Search = ({ margin = "" }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 8,
        backgroundColor: "white",
        padding: 8,
        marginTop: 32,
        borderRadius: 50,
        marginBottom: margin,
      }}
    >
      <TextInput style={{ flex: 1,paddingHorizontal:6 }} placeholder="type here ..." />
      <View style={Styles.icon}>
        <SearchIcon />
      </View>
    </View>
  );
};

export default Search;

const Styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: "#E0A387",
    justifyContent: "center",
    alignItems: "center",
  },
});
