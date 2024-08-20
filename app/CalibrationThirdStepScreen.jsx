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
          </View>
          <View className="flex-col justify-center items-center">
            <TouchableOpacity className="mb-8 bg-blue rounded-full py-2 px-3">
              <Link href="/menu" className="text-white">
                Wróć do menu
              </Link>
            </TouchableOpacity>

            <TouchableOpacity className="bg-red rounded-full py-2 px-3 w-[80%]">
              <Link
                href="/CalibrationManualScreen"
                className="text-white text-center"
              >
                Chcę ręcznie ustawić pozycję wózka na każdym biegu
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CalibrationThirdStepScreen;
