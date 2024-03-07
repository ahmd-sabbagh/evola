import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./setting/Components/Header";
import { paddingSafeArea } from "../../../constants/theme";
import LogOut from "./setting/Components/LogOut";
import LoginNow from "./setting/Components/LoginNow";
import UserInfo from "./setting/Components/UserInfo";
import AccountInfo from "./setting/Components/AccountInfo";
import BasicInfo from "./setting/Components/BasicInfo";
import BeAwinner from "./setting/Components/BeAwinner";
import { useSelector } from "react-redux";
import AppInfo from "./setting/Components/AppInfo";
import { useIsFocused } from "@react-navigation/native";

const Setting = () => {
  const auth = useSelector((state) => state.auth);
  const ref = React.useRef(null);
  const isFocused = useIsFocused();
  useEffect(() => {}, [isFocused]);
  // Bottom sheet
  const bottomRef = useRef(null);
  const snapPoints = ["40%"];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgba(252,241,236,0.8)", "rgba(241,237,251,0.5)"]}
        style={{
          flex: 1,
          paddingHorizontal: paddingSafeArea,
        }}
      >
        <ScrollView
          style={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}
          ref={ref}
        >
          <Header auth={auth} />
          <View style={styles.log}>{auth ? <UserInfo /> : <LoginNow />}</View>
          {auth && <AccountInfo />}
          <BasicInfo />
          <BeAwinner />
          <AppInfo />
          {auth && <LogOut />}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  log: {
    height: 91,
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    marginTop: 21,
  },
});
