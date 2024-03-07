import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContainerItem from "./ContainerItem";
import Friends from "./assets/high-five-2.svg"
import Market from "./assets/store-5.svg"
import Item from "./Item";

const BeAwinner = () => {
    const share = {
        icon: < Friends />,
        backColor: "#65B5C4",
        title: "Share the application to win",
        border:false
    }
    const store = {
        icon: < Market />,
        backColor: "#6965C4",
        title: "Join merchant outlets",
        border:true
    }
  return <ContainerItem title="Be a winner">
    <Item {...share} />
    <Item {...store} />
  </ContainerItem>;
};

export default BeAwinner;

