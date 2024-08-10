import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const half_batteryImg = require("../assets/half_battery.png");
const low_batteryImg = require("../assets/low_battery.png");
const bluetoothImg = require("../assets/bluetooth.png");
const shiftsImg = require("../assets/shifts.png");
const calibrateImg = require("../assets/calibrate.png");
const statsImg = require("../assets/stats.png");
const diagnosticImg = require("../assets/diagnostic.png");

const CustomButton = ({ source, title, description }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-start w-full mb-4"
      // onPress={() => navigation.navigate("connection")}
    >
      <Image
        source={source}
        className="h-[25px] w-[25px]"
        resizeMode="contain"
      />
      <View className="ml-2">
        <Text className="text-white font-bold">{title}</Text>
        <Text className="text-gray-400 text-xs">{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <SafeAreaView className="h-full bg-dark">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex-row justify-center">
          <View className="flex-col items-center">
            <Text className="text-white text-xs">manetka</Text>
            <Image
              source={half_batteryImg}
              className="h-[25px]"
              resizeMode="contain"
            />
          </View>
          <View className="flex-col items-center">
            <Text className="text-white text-xs">przerzutka</Text>
            <Image
              source={low_batteryImg}
              className="h-[25px]"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="flex-col p-10 mt-10 w-full">
          <CustomButton
            source={bluetoothImg}
            title="Połączenie z urządzeniem"
            description="Informacje o stanie połączenia"
          />
          <CustomButton
            source={shiftsImg}
            title="Zdalna zmiana biegów"
            description="Możliwość manualnej zmiany biegów przez aplikację"
          />
          <CustomButton
            source={calibrateImg}
            title="Kalibracja przerzutki"
            description="Narzędzia do kalibracji, aby zapewnić precyzyjną zmianę biegów"
          />
          <CustomButton
            source={statsImg}
            title="Statystyki i dane"
            description="Zbieranie i wyświetlanie danych, np. zmian biegów, czas pracy"
          />
          <CustomButton
            source={diagnosticImg}
            title="Diagnostyka"
            description="Informacje diagnostyczne, takie jak błędy i ostrzeżenia"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
