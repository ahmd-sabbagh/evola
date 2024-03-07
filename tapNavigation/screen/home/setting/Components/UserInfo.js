import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Box from "./assets/box-17.svg";
import Location from "./assets/place.svg";
import Gear from "./assets/settings-5.svg";
import { FONTS } from "../../../../../constants/theme";

const data = [
  {
    icon: <Box />,
    text: "My requests",
    color: "#F2EAEA",
  },
  {
    icon: <Location />,
    text: "Titles",
    color: "#FCF5F1",
  },
  {
    icon: <Gear />,
    text: "Settings",
    color: "#E6E6E6",
  },
];

const UserInfo = () => {
  return (
    <View style={styles.cont}>
        {data.map((item,idx) => (
            <TouchableOpacity style={styles.box} key={idx}>
                <View style={[styles.icon,{backgroundColor:item.color}]}>
                    {item.icon}
                </View>
                <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
        ))}
     
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
    cont:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    box:{
        alignItems:"center",
        gap:6
    },
    icon:{
        width:35,
        height: 35,
        borderRadius:35,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:"#2D2E49",
        fontFamily:FONTS.medium,
        fontSize:14
    }

});
