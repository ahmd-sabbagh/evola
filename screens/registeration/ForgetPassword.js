import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Locker from "./assets/locker.svg";
import Arrow from "./assets/arrow.svg";
import Phone from "./assets/phone.svg";
import Flag from "./assets/flag.svg";
import { Styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { FONTS } from "../../constants/theme";

const ForgetPassword = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={Styles.container}>
        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <TouchableOpacity
            onPress={() => navigate.navigate("Login")}
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
            Forget Password
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
        {/* Phone Number */}
        <View style={[Styles.phoneNumContainer, { marginTop: 30 }]}>
          <View style={Styles.phoneNum}>
            <Phone />
            <View style={Styles.input}>
              <Text style={Styles.label}>{"Phone Number"}</Text>
              <TextInput
                multiline
                style={[Styles.inputText]}
                placeholder="01069626135"
                placeholderTextColor={"#484848"}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={Styles.country}>
            <View style={Styles.codeNum}>
              <Flag />
              <Text style={Styles.code}>+922</Text>
            </View>
          </View>
        </View>
        {/* Phone Number */}
        {/* Login */}
        <TouchableOpacity
          style={[Styles.login, { marginTop: 46 - 17 }]}
          onPress={() => navigate.navigate("Otp")}
        >
          <Text style={Styles.loginText}>Continuation</Text>
        </TouchableOpacity>
        {/* Login */}
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
