import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { LinearGradient } from "expo-linear-gradient";
import { latestProduct } from "./components/data";
import MainCard from "../Components/MainCard";
import { paddingSafeArea } from "../../../constants/theme";

const Fav = () => {
  const [isRefresh, setIsRefresh] = useState(false);
  const [apiData,setApiData] = useState(latestProduct)
  const refreshHandler = () => {
    setIsRefresh(true)
    setTimeout(() => {
      setApiData(latestProduct)
      setIsRefresh(false)
    },1000)
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["rgba(252,241,236,0.8)", "rgba(241,237,251,0.5)"]}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, paddingHorizontal: paddingSafeArea }}>
          <Header />
          <Search margin={20}/>
          {/* Products */}
          <FlatList
            data={apiData}
            columnWrapperStyle={{ gap: 8 }}
            contentContainerStyle={{ gap: 8, paddingVertical: 10 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MainCard {...item} />}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={isRefresh}
                onRefresh={refreshHandler}
                title="Refresh"
                titleColor="#E0A387"
                tintColor="#E0A387"
              />
            }
          />
          {/* Products */}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Fav;
