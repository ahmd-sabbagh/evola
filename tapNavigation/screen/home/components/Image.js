import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SourceImage from "../assets/offerPrice.png";

const ImagePaner = () => {
  return <Image source={SourceImage} style={styles.image} />;
};

export default ImagePaner;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 244,
    resizeMode: "contain",
  },
});
