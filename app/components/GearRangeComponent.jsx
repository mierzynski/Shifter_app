import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

const cassetteRatioArray = [
  {
    id: 1,
    teethNumber: 0,
  },
  {
    id: 2,
    teethNumber: 0,
  },
  {
    id: 3,
    teethNumber: 0,
  },
  {
    id: 4,
    teethNumber: 0,
  },
  {
    id: 5,
    teethNumber: 0,
  },
  {
    id: 6,
    teethNumber: 0,
  },
  {
    id: 7,
    teethNumber: 0,
  },
  {
    id: 8,
    teethNumber: 0,
  },
  {
    id: 9,
    teethNumber: 0,
  },
  {
    id: 10,
    teethNumber: 0,
  },
  {
    id: 11,
    teethNumber: 0,
  },
  {
    id: 12,
    teethNumber: 0,
  },
];

function GearRangeComponent(gearsNumber) {
  const [gearsRangeArray, setGearsRangeArray] = useState(cassetteRatioArray);
  const speedNum = gearsNumber.gearsNumber;

  const handleGearsNumber = (id, num) => {
    setGearsRangeArray((prevArray) =>
      prevArray.map((sprocket) =>
        sprocket.id === id ? { ...sprocket, teethNumber: num } : sprocket
      )
    );
  };
  return (
    <View className="items-center">
      <View className="w-[35%]">
        {gearsRangeArray.slice(0, speedNum).map((sprocket) => (
          <View
            key={sprocket.id}
            className="flex-row justify-between items-center "
          >
            <Text className="text-white font-bold text-lg">
              {sprocket.id}rz:
            </Text>
            <TextInput
              className="ml-2 bg-blue rounded-sm text-white text-lg font-bold w-10 h-6 text-center "
              keyboardType="numeric"
              onChangeText={(num) => handleGearsNumber(sprocket.id, num)}
              value={sprocket.teethNumber.toString()}
              maxLength={2}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

export default GearRangeComponent;
