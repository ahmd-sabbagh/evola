import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";
import Header from "./Cart/components/Header";
import { paddingSafeArea } from "../../../constants/theme";
import Footer from "./Cart/components/Footer";
import Card from "./Cart/components/Card";
import { SwipeListView } from "react-native-swipe-list-view";
import Trash from "./assets/trash-can.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../../rtk/slices/addToCart";
import EmptyCart from "./Cart/components/EmptyCart";

const Cart = () => {
  const Products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const onLeftActionStatusChange = (rowKey) => {
    console.log("onLeftActionStatusChange", rowKey);
  };

  const onRightActionStatusChange = (rowKey) => {
    console.log("onRightActionStatusChange", rowKey);
  };

  const onRightAction = (rowKey) => {
    console.log("onRightAction", rowKey);
  };

  const onLeftAction = (rowKey) => {
    console.log("onLeftAction", rowKey);
  };
  // Close Row
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  // Delete Row
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    dispatch(deleteItem(rowKey));
  };
  // HiddenItemWithAction
  const RenderItemWithAcrion = (props) => {
    const {
      swipeAnimatedValue,
      leftActionActivated,
      rightActionActivated,
      rowActionAnimatedValue,
      rowHeightAnimatedValue,
      onClose,
      onDelete,
    } = props;
    if (rightActionActivated) {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(rowActionAnimatedValue, {
        toValue: 75,
        useNativeDriver: false,
      }).start();
    }

    return (
      <Animated.View style={[styles.rowBack, { height: 117 }]}>
        <Animated.View
          style={[
            styles.cont,
            {
              flex: 1,
              width: rowActionAnimatedValue,
            },
          ]}
        >
          <TouchableOpacity style={[styles.backRightBtn]} onPress={onDelete}>
            <Animated.View
              style={[
                styles.trashIcon,
                {
                  transform: [
                    {
                      scale: swipeAnimatedValue.interpolate({
                        inputRange: [-90, -45],
                        outputRange: [1, 0],
                        extrapolate: "clamp",
                      }),
                    },
                  ],
                },
              ]}
            >
              <Trash />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    );
  };
  // RenderHiddenItem
  const renderHiddenItem = (data, rowMap) => {
    const rowActionAnimatedValue = new Animated.Value(75);
    const rowHeightAnimatedValue = new Animated.Value(60);
    return (
      <RenderItemWithAcrion
        data={data}
        rowMap={rowMap}
        rowActionAnimatedValue={rowActionAnimatedValue}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };
  // Render Item
  const renderItem = (data, rowMap) => {
    const rowHeightAnimatedValue = new Animated.Value(60);
    return (
      <Card
        data={data}
        rowHeightAnimatedValue={rowHeightAnimatedValue}
        removeRow={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {Products.length > 0 ? (
        <>
          <Header />
          <View
            style={{
              paddingHorizontal: paddingSafeArea,
              flex: 1,
              marginTop: 16,
            }}
          >
            <SwipeListView
              data={Products}
              renderItem={renderItem}
              renderHiddenItem={renderHiddenItem}
              leftOpenValue={75}
              rightOpenValue={-75}
              disableRightSwipe
              onRowDidOpen={onRowDidOpen}
              leftActivationValue={100}
              rightActivationValue={-300}
              leftActionValue={0}
              rightActionValue={-500}
              onLeftAction={onLeftAction}
              onRightAction={onRightAction}
              onLeftActionStatusChange={onLeftActionStatusChange}
              onRightActionStatusChange={onRightActionStatusChange}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <Footer />
        </>
      ) : (
        <EmptyCart />
      )}
    </SafeAreaView>
  );
};

export default Cart;
const styles = StyleSheet.create({
  rowBack: {
    backgroundColor: "#FF5767",
    borderRadius: 8,
    flexDirection: "row",
    gap: 15,
    padding: 13,
    paddingBottom: 16,
    marginBottom: 16,
    height: 117,
  },
  cont: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#FF5767",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
