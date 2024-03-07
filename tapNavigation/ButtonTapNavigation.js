import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Icons Tap Bar
import HomeIcon from "./assets/Home.svg";
import HomeIconOut from "./assets/Iconly Bold Home.svg";
import CartIcon from "./assets/cart.svg";
import CartIconOut from "./assets/vuesax-linear-bag-2.svg";
import HeartIcon from "./assets/heart.svg";
import HeartIconOut from "./assets/heart-circle-linear.svg";
import CategoryIcon from "./assets/category.svg";
import CategoryIconOut from "./assets/category-2-linear.svg";
// Icons Tap Bar
import Home from "./screen/home/Home";
import Cart from "./screen/home/Cart";
import Fav from "./screen/home/Fav";
import Setting from "./screen/home/Setting";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { faild, succses } from "../rtk/slices/auth";

const Tab = createBottomTabNavigator();

const ButtonTapNavigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      AsyncStorage.getItem("user").then((value) => {
        if (value != null) {
          dispatch(succses());
        } else {
          dispatch(faild());
        }
      });
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <Tab.Navigator
      optimizationsEnabled={true}
      screenOptions={({ route }) => ({
        lazy: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? <HomeIcon /> : <HomeIconOut />;
          } else if (rn === "Cart") {
            iconName = focused ? <CartIcon /> : <CartIconOut />;
          } else if (rn === "Fav") {
            iconName = focused ? <HeartIcon /> : <HeartIconOut />;
          } else if (rn === "Setting") {
            iconName = focused ? <CategoryIcon /> : <CategoryIconOut />;
          }

          return iconName;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Fav" component={Fav} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default ButtonTapNavigation;
