import { View, Text, TextInput } from "react-native";
import React, { useRef } from "react";

const Inputs = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const arrayRef = [
    {
      ref: ref1,
    },
    {
      ref: ref2,
    },
    {
      ref: ref3,
    },
    {
      ref: ref4,
    },
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      {arrayRef.map((item, idx) => (
        <View
          key={idx}
          style={{
            width: 66,
            height: 66,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 66 / 2,
          }}
        >
          <TextInput
            ref={item.ref}
            style={{
              fontSize: 20,
              textAlign: "center",
            }}
            maxLength={1}
            onChangeText={(e) => {
                console.log(e);
            }}
          />
        </View>
      ))}
    </View>
  );
};

export default Inputs;
