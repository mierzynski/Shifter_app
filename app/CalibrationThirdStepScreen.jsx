import { Link } from "expo-router";
import React, { useState, useLocation, useContext } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context } from "./_layout";
import CassetteAndButtonsComponent from "./components/CassetteAndButtonsComponent";

function CalibrationThirdStepScreen() {
  const [speedNumber, setSpeedNumber] = useContext(Context);
  const [gear, setGear] = useState(1);

  const handleBackToMenu = () => {
    navigation.dispatch(popAction);
  };

  return (
    <SafeAreaView className="h-full bg-dark">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-col items-center">
          <Text className="text-white text-lg font-bold">ETAP 3/3</Text>
          <View className="p-9">
            <Text className="text-white font-bold mb-8">
              1. Przetestuj zmianę biegów manualnie
            </Text>
            <CassetteAndButtonsComponent />
            <TouchableOpacity className=" bg-blue rounded-3xl">
              <Link href="/ConnectionScreen" className="p-2">
                <Text className="text-white">Wróć do menu</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CalibrationThirdStepScreen;
