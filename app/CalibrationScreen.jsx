import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function CalibrationScreen() {
  return (
    <SafeAreaView className="h-full bg-dark">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-col items-center">
          <Text className="text-white text-lg font-bold">ETAP 1/3</Text>
          <View className="p-9">
            <Text className="text-white font-bold mb-2">
              1. Przygotowanie przerzutki i roweru:
            </Text>
            <View className="pl-4 mb-8">
              <Text className="text-white text-xs list-disc font-light">
                • Upewnij się, że rower jest stabilnie ustawiony, najlepiej na
                stojaku serwisowym.
              </Text>
              <Text className="text-white text-xs list-disc font-light">
                • Sprawdź, czy bateria przerzutki jest naładowana.
              </Text>
            </View>

            <Text className="text-white font-bold mb-2">
              2. Pozycjonowanie przerzutki:
            </Text>
            <View className="pl-4 mb-8">
              <Text className="text-white text-xs list-disc font-light">
                • Upewnij się, że przerzutka jest prawidłowo zamontowana i
                ustawiona względem kasety.
              </Text>
              <Text className="text-white text-xs list-disc font-light">
                • Przełącz przerzutkę na najniższy (najmniejszy) bieg.
              </Text>
            </View>

            <Text className="text-white font-bold mb-2">
              3. Kalibracja krańcowych pozycji (H i L):
            </Text>
            <View className="pl-4 mb-8">
              <Text className="text-white text-xs list-disc font-light">
                • Użyj śrub regulacyjnych H (High) i L (Low), aby ustawić
                krańcowe pozycje przerzutki. H ogranicza maksymalny zasięg na
                największej zębatce, a L na najmniejszej.
              </Text>
            </View>

            <Text className="text-white font-bold mb-2">
              4. Ustawienie linii łańcucha:
            </Text>
            <View className="pl-4 mb-8">
              <Text className="text-white text-xs list-disc font-light">
                • Sprawdź, czy przerzutka ustawiona jest dokładnie pod
                najmniejszą zębatką.
              </Text>
              <Text className="text-white text-xs list-disc font-light">
                • Jeśli łańcuch nie jest w linii, użyj śruby regulacyjnej linii
                łańcucha, aby dostosować pozycję.
              </Text>
            </View>
          </View>
          <TouchableOpacity className=" bg-blue rounded-3xl">
            <Link href="/CalibrationSecondStepScreen" className="p-2">
              <Text className="text-white">Przejdź do kolejnego etapu</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CalibrationScreen;
