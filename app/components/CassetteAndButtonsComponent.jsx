import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { Context } from "../_layout";

function CassetteAndButtonsComponent() {
  const [gear, setGear] = useState(1);
  const [speedNumber] = useContext(Context);

  const CreateCassette = () => {
    let views = [];
    let height = 340;

    for (let i = 0; i < speedNumber; i++) {
      if (speedNumber === 8) {
        height = 340 - i * 40;
      } else if (speedNumber === 9) {
        height = 340 - i * 35;
      } else if (speedNumber === 10) {
        height = 340 - i * 33;
      } else if (speedNumber === 11) {
        height = 340 - i * 31;
      } else {
        height = 340 - i * 28;
      }

      const backgroundColor = i === gear - 1 ? "bg-white" : "bg-gray_cassette";
      const gearWidth = i === gear - 1 ? "w-[13px]" : "w-[10px]";

      views.push(
        <View
          key={i}
          style={{ height: height }}
          className={`${gearWidth} mr-2 ${backgroundColor}`}
        />
      );
    }

    return views;
  };

  const handleIncreaseGear = () => {
    if (gear < speedNumber) {
      setGear(gear + 1);
    }
  };

  const handleDecreaseGear = () => {
    if (gear > 1) {
      setGear(gear - 1);
    }
  };

  return (
    <View className="flex-row w-full h-[70%]">
      <View className="flex-row items-center">{CreateCassette()}</View>
      <View className="flex-row">
        <View className="flex-row"></View>
        <View className="flex-col items-center justify-start pt-12">
          <Text className="text-white font-bold">{gear}</Text>
          <Text className="text-white font-bold">bieg</Text>
        </View>
        <View className="flex-col items-center py-4 px-3">
          <TouchableOpacity onPress={handleIncreaseGear}>
            <Image
              source={require("../../assets/arrowButton.png")}
              className="h-12 w-12 -rotate-90 mb-3"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDecreaseGear}>
            <Image
              source={require("../../assets/arrowButton.png")}
              className="h-12 w-12 rotate-90"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CassetteAndButtonsComponent;
