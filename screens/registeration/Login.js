import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Styles } from "./style";
import LogoSvg from "./assets/logo.svg";
import Phone from "./assets/phone.svg";
import Lock from "./assets/lock.svg";
import Flag from "./assets/flag.svg";
// Icon social
import Google from "./assets/google.svg";
import Facebook from "./assets/facebook.svg";
import Apple from "./assets/apple.svg";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Icon social

const Login = ({ navigation }) => {
  const Navigate = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");

  const setData = async () => {
    if (phoneNumber.length == 0 && Password.length == 0) {
      Alert.alert("warning", "please write your data");
    } else {
      const user = {
        phoneNumber,
        Password,
      };
      try {
        await AsyncStorage.setItem("user", JSON.stringify(user));
        navigation.navigate("tapHome");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={Styles.container}>
          {/* Logo */}
          <View style={Styles.imageContainer}>
            <LogoSvg />
          </View>
          {/* Logo */}
          {/* Title */}
          <View style={Styles.textContainer}>
            <Text style={Styles.textTitle}>{"Log In"}</Text>
            <Text style={Styles.textTitle}>{"Welcom Back"}</Text>
          </View>
          {/* Title */}
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
                  onChangeText={(value) => setPhoneNumber(value)}
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
                  placeholder="012012"
                  placeholderTextColor={"#484848"}
                  onChangeText={(value) => setPassword(value)}
                />
              </View>
            </View>
          </View>
          {/* Password */}
          <Pressable onPress={() => Navigate.navigate("ForgetPassword")}>
            <Text style={Styles.forget}>Forget Password ?</Text>
          </Pressable>
          {/* Login */}
          <TouchableOpacity onPress={() => setData()} style={Styles.login}>
            <Text style={Styles.loginText}>Log In</Text>
          </TouchableOpacity>
          {/* Login */}
          <Text style={[Styles.forget, { textAlign: "center" }]}>
            No Have Account ?
          </Text>
          {/* Register */}
          <Pressable
            style={[Styles.login, { backgroundColor: "#EDDEDE" }]}
            onPress={() => Navigate.navigate("Home")}
          >
            <Text style={[Styles.loginText, { color: "#935154" }]}>
              New Register
            </Text>
          </Pressable>
          {/* Register */}
          {/* Icons */}
          <View style={Styles.iconContainer}>
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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Login;
