import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GearRangeComponent from "./components/GearRangeComponent";

const speedNumberCassetteArray = [
  "8 rzędowa",
  "9 rzędowa",
  "10 rzędowa",
  "11 rzędowa",
  "12 rzędowa",
];

function CalibrationSecondStepScreen() {
  const [selectedGearsNumber, setSelectedGearsNumber] = useState(0);

  const handleGearsNumber = (buttonValue) => {
    if (buttonValue == "increase" && selectedGearsNumber < 4) {
      setSelectedGearsNumber(selectedGearsNumber + 1);
    } else if (buttonValue == "reduce" && selectedGearsNumber > 0) {
      setSelectedGearsNumber(selectedGearsNumber - 1);
    }
  };

  const handleSpeedNumber = () => {
    switch (selectedGearsNumber) {
      case 0:
        return 8;
      case 1:
        return 9;
      case 2:
        return 10;
      case 3:
        return 11;
      case 4:
        return 12;
      default:
        return 0;
    }
  };

  return (
    <SafeAreaView className="h-full bg-dark">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-col items-center">
          <Text className="text-white text-lg font-bold">ETAP 2/3</Text>
          <View className="p-9">
            <Text className="text-white font-bold mb-2">
              1. Podaj ilość rzędów Twojej kasety
            </Text>
            <View className="flex-row items-center justify-center">
              <Pressable
                className="p-3 active:bg-grey rounded-xl"
                onPress={() => handleGearsNumber("reduce")}
              >
                <Text className="text-white font-bold text-xl">-</Text>
              </Pressable>
              <View className="p-1.5 bg-blue rounded-sm">
                <Text className="text-white font-bold">
                  {speedNumberCassetteArray[selectedGearsNumber]}
                </Text>
              </View>
              <Pressable
                className="p-3 active:bg-grey rounded-xl"
                onPress={() => handleGearsNumber("increase")}
              >
                <Text className="text-white font-bold text-xl">+</Text>
              </Pressable>
            </View>
            <Text className="text-white font-bold mb-2 mt-5">
              2. Podaj poszczególne ilości zębów (od największej ilości do
              najmniejszej)
            </Text>
            <GearRangeComponent gearsNumber={handleSpeedNumber()} />
          </View>
          <TouchableOpacity className=" bg-blue rounded-3xl">
            <Link href="/CalibrationThirdStepScreen" className="p-2">
              <Text className="text-white">Przejdź do kolejnego etapu</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CalibrationSecondStepScreen;
