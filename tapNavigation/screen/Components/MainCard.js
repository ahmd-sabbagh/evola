import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FONTS } from "../../../constants/theme";
import Heart from "../home/assets/heart-circle-linear.svg";
import Star from "../home/assets/start.svg";
import Bag from "../home/assets/vuesax-linear-bag-2.svg";

const MainCard = ({ image, title, price, rate }) => {
  return (
    <View style={styles.imageContainer} >
      <Image style={styles.image} resizeMode="cover" source={image} />

      {/* Content */}
      <View style={styles.textContent}>
        {/* Like */}
        <View>
          <Heart backgroundColor="red" />
        </View>
        {/* Like */}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
          {/* Rate */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              backgroundColor: "rgba(255, 197, 84, 0.2)",
              borderRadius: 20,
              width: 51,
              height: 24,
              marginTop: 9,
            }}
          >
            <Star />
            <Text style={{ color: "white", fontFamily: FONTS.bold }}>
              {rate}
            </Text>
          </View>
          {/* Rate */}
          <TouchableOpacity style={styles.bag}>
            <Bag />
          </TouchableOpacity>
        </View>
      </View>
      {/* Content */}
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  imageContainer: {
    width: Dimensions.get("window").width / 2 - 14,
    backgroundColor: "#FFDDE0",
    overflow: "hidden",
    height: 250,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
  },
  textContent: {
    position: "absolute",
    padding: 8,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: "white",
  },
  price: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    color: "white",
  },
  bag: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 43,
    height: 43,
    backgroundColor: "#E0A387",
    borderRadius: 43,
    justifyContent: "center",
    alignItems: "center",
  },
});
