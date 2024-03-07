import { View, SafeAreaView, ScrollView, Alert, BackHandler } from "react-native";
import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Sections from "./components/Sections";
import ImagePaner from "./components/Image";
import LatestProducts from "./components/LatestProducts";
import NewCollection from "./components/NewCollection";
import FeaturedProducts from "./components/FeaturedProducts";
import { LinearGradient } from "expo-linear-gradient";
import { paddingSafeArea } from "../../../constants/theme";
import { useFocusEffect } from "@react-navigation/native";

const Home = () => {
  const handelBackPress = () => {
    Alert.alert("Exit App", "Are You Sure Want To Exit", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text:'Exit',
        onPress:() => BackHandler.exitApp(),
        style:"destructive"
      }
    ]);
    return true
  };
  useFocusEffect(React.useCallback(() => {
    BackHandler.addEventListener('hardwareBackPress',handelBackPress)
    return () => {
      BackHandler.removeEventListener('hardwareBackPress',handelBackPress)
    }
  }))
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgba(252,241,236,0.8)", "rgba(241,237,251,0.5)"]}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, paddingHorizontal: paddingSafeArea }}>
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="on-drag"
          >
            <Header />
            <Search />
            <Sections />
            <ImagePaner />
            <LatestProducts />
            <NewCollection />
            <FeaturedProducts />
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
