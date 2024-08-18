import { ScrollView, Text, View, Image, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ConnectionScreen = () => {
  return (
    <SafeAreaView className="h-full bg-dark">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex-col items-start px-10 space-y-8">
          <View className="w-full space-y-2">
            <Text className="text-white font-bold ">
              1. Włącz Bluetooth w ustawieniach
            </Text>
            <View className="items-center w-full">
              <Image
                source={require("../assets/bluetooth_turn_on_screen.jpeg")}
                className="w-[250px] h-[122px]"
                resizeMode="contain"
              />
            </View>
          </View>

          <View className="w-full space-y-2">
            <Text className="text-white font-bold ">
              1. Włącz Bluetooth w ustawieniach
            </Text>
            <View className="items-center w-full">
              <Image
                source={require("../assets/bluetooth_new_device.jpeg")}
                className="w-[250px] h-[100px]"
                resizeMode="contain"
              />
            </View>
          </View>

          <View className="flex-row w-full justify-center space-x-6 pt-10">
            <Image
              source={require("../assets/iphone.png")}
              className="w-[100px]"
              resizeMode="contain"
            />
            <ActivityIndicator size="large" color="#fff" />
            <Image
              source={require("../assets/chip.png")}
              className="w-[100px]"
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConnectionScreen;
