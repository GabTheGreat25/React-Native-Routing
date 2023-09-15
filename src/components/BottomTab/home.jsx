import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function () {
  const navigation = useNavigation();
  return (
    <View className="items-center justify-center flex-1 bg-light-default">
      <Text>home</Text>
      <Text onPress={() => navigation.navigate("Stack")}>Go to Stack</Text>
    </View>
  );
}
