import { Link } from "expo-router";
import React, { useState, useLocation, useContext } from "react";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context } from "./_layout";
import CassetteAndButtonsComponent from "./components/CassetteAndButtonsComponent";

const CalibrationManualScreen = () => {
  return (
    <SafeAreaView className="h-full bg-dark">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Text className="text-white font-bold text-center">
          MANUALNA KALIBRACJA ZMIANY BIEGÓW
        </Text>
        <View className="flex-col items-center">
          <View className="p-9">
            <CassetteAndButtonsComponent />
            <View>
              <Text className="text-white text-center text-xs">
                KALIBRACJĘ KRAŃCOWYCH POZYCJI MUSISZ USTAWIĆ FIZYCZNIE
              </Text>
              <Text className="text-white text-center text-xs font-light">
                Użyj śrub regulacyjnych H (High) i L (Low), aby ustawić krańcowe
                pozycje przerzutki. H ogranicza maksymalny zasięg na największej
                zębatce, a L na najmniejszej.
              </Text>
            </View>
            <View className="flex-col items-center mt-5">
              <Text className="text-white">1 mm</Text>
              <View className="flex-row justify-center space-x-6">
                <View className="flex-col items-center">
                  <Text className="text-white text-xs mb-2">w stronę koła</Text>
                  <TouchableOpacity>
                    <Image
                      source={require("../assets/arrowButton.png")}
                      className="h-12 w-12 rotate-180"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <View className="flex-col items-center">
                  <Text className="text-white text-xs mb-2">w stronę haka</Text>
                  <TouchableOpacity>
                    <Image
                      source={require("../assets/arrowButton.png")}
                      className="h-12 w-12"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalibrationManualScreen;
