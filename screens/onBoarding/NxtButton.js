import { StyleSheet, Animated, TouchableOpacity, View } from "react-native";
import { useRef, useEffect } from "react";
import React from "react";
import Svg, { G, Circle } from "react-native-svg";
import Arrow from "./assets/arrow.svg";

const NxtButton = ({ percentage, scrollTo }) => {
  const size = 81;
  const strokWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokWidth / 2;
  const circumferance = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);
  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumferance - (circumferance * value.value) / 100;
      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [percentage]);
  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke="#E0A387"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokWidth}
            fill="transparent"
          />
          <Circle
            stroke="#3C191A"
            fill="transparent"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokWidth}
            strokeDasharray={circumferance}
            ref={progressRef}
          />
        </G>
      </Svg>
      <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
        <Arrow />
      </TouchableOpacity>
    </View>
  );
};

export default NxtButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "#E0A387",
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
