import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Phone from "./assets/phone.svg";
import Lock from "./assets/lock.svg";
import Flag from "./assets/flag.svg";
import User from "./assets/user.svg";
// Icon social
import Google from "./assets/google.svg";
import Facebook from "./assets/facebook.svg";
import Apple from "./assets/apple.svg";
// Icon social
import { Styles } from "./style";
import Arrow from "./assets/arrow.svg";
import { FONTS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
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
            New login
          </Text>
        </View>
        {/* Header */}
        {/* Form */}
        <View style={{ marginTop: 41, gap: 20 }}>
          {/* Full Name */}
          <View style={Styles.phoneNumContainer}>
            <View style={Styles.phoneNum}>
              <User />
              <View style={Styles.input}>
                <Text style={Styles.label}>{"Full Name"}</Text>
                <TextInput style={Styles.inputText} defaultValue="ahmd said" />
              </View>
            </View>
          </View>
          {/* Full Name */}
          {/* Phone Number */}
          <View style={Styles.phoneNumContainer}>
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
          {/* Password */}
          <View style={Styles.phoneNumContainer}>
            <View style={Styles.phoneNum}>
              <Lock />
              <View style={Styles.input}>
                <Text style={Styles.label}>{"Password"}</Text>
                <TextInput
                  secureTextEntry={true}
                  style={Styles.inputText}
                  defaultValue="012012"
                />
              </View>
            </View>
          </View>
          {/* Password */}
        </View>
        {/* Form */}
        {/* Login */}
        <Pressable style={[Styles.login, { marginTop: 46 - 17 }]}>
          <Text style={Styles.loginText}>Register</Text>
        </Pressable>
        {/* Login */}
        <Text style={[Styles.forget, { textAlign: "center" }]}>
          You Have Account ?
        </Text>
        {/* Register */}
        <Pressable
          style={[Styles.login, { backgroundColor: "#EDDEDE" }]}
          onPress={() => navigate.navigate("Login")}
        >
          <Text style={[Styles.loginText, { color: "#935154" }]}>Log In</Text>
        </Pressable>
        {/* Register */}
        {/* Icons */}
        <View style={[Styles.iconContainer,{marginTop:48 - 17}]}>
          <View style={[Styles.icon, { backgroundColor: "#FC6A57" }]}>
            <Google />
          </View>
          <View style={[Styles.icon, { backgroundColor: "#0778F5" }]}>
            <Facebook />
          </View>
          <View style={[Styles.icon, { backgroundColor: "#2A2A2A" }]}>
            <Apple />
          </View>
        </View>
        {/* Icons */}
      </View>
    </SafeAreaView>
  );
};

export default Register;
