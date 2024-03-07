import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../../../../constants/theme";
import { useDispatch } from "react-redux";
import { addToCart, minus } from "../../../../../rtk/slices/addToCart";

const Card = (props) => {
  const {
    data,
    rowHeightAnimatedValue,
    removeRow,
    leftActionState,
    rightActionState,
  } = props;
  const { image, title, price, quantity } = data.item;
  if (rightActionState) {
    Animated.timing(rowHeightAnimatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start(() => {
      removeRow();
    });
  }
  const dispatch = useDispatch();
  return (
    <View style={[styles.card]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.contText}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.foot}>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => dispatch(addToCart(data.item))}>
              <Text style={styles.title}>+</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{quantity}</Text>
            <TouchableOpacity onPress={() => dispatch(minus(data.item))}>
              <Text style={styles.title}>-</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{price} EGY</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "row",
    gap: 15,
    padding: 13,
    paddingBottom: 16,
    marginBottom: 16,
  },
  image: {
    width: 74,
    height: 89,
    resizeMode: "cover",
    borderRadius: 8,
  },
  contText: {
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.main,
  },
  foot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F2F2F2",
    borderRadius: 25,
    width: 117,
    height: 34,
    paddingHorizontal: 15,
  },
});
