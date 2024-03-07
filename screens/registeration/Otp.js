import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { Styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import Arrow from "./assets/arrow.svg";
import Locker from "./assets/locker.svg";
import { FONTS } from "../../constants/theme";
import Inputs from "../../components/Inputs";
const Otp = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.container}>
        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <TouchableOpacity
            onPress={() => navigate.navigate("ForgetPassword")}
            style={{
              width: 35,
              height: 35,
              borderRadius: 10,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Arrow />
          </TouchableOpacity>
          <Text style={{ fontFamily: FONTS.bold, fontSize: 14 }}>
            Restore password
          </Text>
        </View>
        {/* Header */}
        {/* Icon */}
        <View style={{ marginTop: 24, alignItems: "center" }}>
          <Locker />
        </View>
        {/* Icon */}
        {/* Text */}
        <View style={{ marginTop: 19 }}>
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: 14,
              textAlign: "center",
            }}
          >
            Forget Password ?
          </Text>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: 13,
              marginTop: 11,
              textAlign: "center",
            }}
          >
            Please call your phone number
          </Text>
        </View>
        {/* Text */}
        {/* OTP */}
        <Inputs />
        {/* OTP */}
        <Pressable>
          <Text
            style={{
              color: "#491B1D",
              fontFamily: FONTS.bold,
              fontSize: 14,
              textAlign: "center",
              marginTop: 27,
            }}
          >
            Refactor the code
          </Text>
        </Pressable>
        {/* Send */}
        <TouchableOpacity style={[Styles.login,{marginTop:27}]} onPress={() => navigate.navigate("NewPass")}>
          <Text style={Styles.loginText}>Send</Text>
        </TouchableOpacity>
        {/* Send */}
      </View>
    </SafeAreaView>
  );
};
export default Otp;
