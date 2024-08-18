import { Stack } from "expo-router";
import React, { useState } from "react";

export const Context = React.createContext();

export default function RootLayout() {
  const [speedNumber, setSpeedNumber] = useState(8);

  return (
    <Context.Provider value={[speedNumber, setSpeedNumber]}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1c1c1e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            title: "Menu",
          }}
        />
        <Stack.Screen
          name="ConnectionScreen"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1c1c1e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            title: "Połączenie z urządzeniem",
          }}
        />
        <Stack.Screen
          name="CalibrationScreen"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1c1c1e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            title: "Kalibracja przerzutki",
          }}
        />
        <Stack.Screen
          name="CalibrationSecondStepScreen"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1c1c1e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackTitle: "etap 1/3",
            title: "Kalibracja przerzutki",
          }}
        />
        <Stack.Screen
          name="CalibrationThirdStepScreen"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1c1c1e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackTitle: "etap 2/3",
            title: "Kalibracja przerzutki",
          }}
        />
      </Stack>
    </Context.Provider>
  );
}
