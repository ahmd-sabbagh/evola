import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Hey from "../../../assets/wave.svg";
import { FONTS } from "../../../../constants/theme";
import Notification from "../../../assets/Notification.svg";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:20
      }}
    >
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={Styles.title}>Good evening</Text>
          <Hey width={19} height={19} />
        </View>
        <Text style={Styles.desc}>What are you looking for</Text>
      </View>
      <TouchableOpacity style={Styles.notification}>
        <Notification />
        <View style={Styles.num}>
          <Text style={Styles.count}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.bold,
    fontSize: 15,
    color: "#666C89",
  },
  desc: {
    fontFamily: FONTS.semiBold,
    fontSize: 20,
    color: "#172B4D",
  },
  notification: {
    width: 41,
    height: 41,
    backgroundColor: "white",
    borderRadius: 41 / 2,
    justifyContent:"center",
    alignItems:"center"
  },
  num:{
    position:"absolute",
    width:20,
    height:20,
    borderRadius:18 / 2,
    backgroundColor:"#FF0019",
    top: -5,
    left:-5,
    justifyContent:"center",
    alignItems:"center",
  },
  count:{
    fontFamily:FONTS.bold,
    fontSize:12,
    color:"white"
  }
});
export default Header;
