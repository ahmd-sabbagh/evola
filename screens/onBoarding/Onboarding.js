import { View, FlatList, SafeAreaView, Animated } from "react-native";
import { useState, useRef } from "react";
import { data } from "./assets/data";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import NxtButton from "./NxtButton";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const navigat = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChange = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const slideRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < data.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
        navigat.navigate("Login")
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 3 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <OnboardingItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChange}
            viewabilityConfig={viewConfig}
            ref={slideRef}
          />
        </View>
        <Paginator data={data} scrollX={scrollX} />
        <NxtButton
          scrollTo={scrollTo}
          percentage={(currentIndex + 1) * (100 / data.length)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
