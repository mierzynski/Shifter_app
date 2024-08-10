// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ConnectionScreen from "./ConnectionScreen";

// const Stack = createNativeStackNavigator();

// const RootLayout = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           component={RootLayout}
//           options={{
//             headerShown: true,
//             headerStyle: {
//               backgroundColor: "#1c1c1e",
//             },
//             headerTintColor: "#fff",
//             headerTitleStyle: {
//               fontWeight: "bold",
//             },
//             title: "Menu",
//           }}
//         />
//         <Stack.Screen
//           component={ConnectionScreen}
//           options={{
//             headerShown: true,
//             headerStyle: {
//               backgroundColor: "#1c1c1e",
//             },
//             headerTintColor: "#fff",
//             headerTitleStyle: {
//               fontWeight: "bold",
//             },
//             title: "Połączenie z urządzeniem",
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default RootLayout;

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
