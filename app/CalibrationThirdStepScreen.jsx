import { Link } from "expo-router";
import React, { useState, useLocation } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function CalibrationThirdStepScreen() {
  return (
    <SafeAreaView className="h-full bg-dark">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-col items-center">
          <Text className="text-white text-lg font-bold">ETAP 3/3</Text>
          <View className="p-9">
            <Text className="text-white font-bold mb-2">
              1. Przetestuj zmianę biegów manualnie
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CalibrationThirdStepScreen;
