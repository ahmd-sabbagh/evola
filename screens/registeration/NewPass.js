import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { Styles } from "./style";
import Arrow from "./assets/arrow.svg";
import Lock from "./assets/lock.svg";
import { FONTS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const NewPass = () => {
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
            Restore password
          </Text>
        </View>
        {/* Header */}
        {/* Form */}
        <View style={{ marginTop: 38, gap: 17 }}>
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
          <View style={Styles.phoneNumContainer}>
            <View style={Styles.phoneNum}>
              <Lock />
              <View style={Styles.input}>
                <Text style={Styles.label}>{"Retype password"}</Text>
                <TextInput
                  secureTextEntry={true}
                  style={Styles.inputText}
                  defaultValue="012012"
                />
              </View>
            </View>
          </View>
        </View>
        {/* Form */}
        {/* Login */}
        <Pressable style={[Styles.login, { marginTop: 46 - 17 }]}>
          <Text style={Styles.loginText}>Reset</Text>
        </Pressable>
        {/* Login */}
      </View>
    </SafeAreaView>
  );
};

export default NewPass;
