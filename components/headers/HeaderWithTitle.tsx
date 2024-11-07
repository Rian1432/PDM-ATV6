import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { DEFAULT_TITLE_COLOR } from "@/constants/globalStyles";

type HeaderWithTitleProps = {
  title: string;
};

export default function HeaderWithTitle({ title }: HeaderWithTitleProps) {
  return (
    <Stack.Screen
      options={{
        title,
        headerTitleStyle: {
          color: DEFAULT_TITLE_COLOR,
          fontSize: 24,
        },
      }}
    />
  );
}
