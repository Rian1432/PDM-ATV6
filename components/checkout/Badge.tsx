import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { PRIMARY_COLOR } from "@/constants/globalStyles";

type badgeProps = {
  content: string;
};

export default function Badge({ content }: badgeProps) {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: PRIMARY_COLOR,
    fontSize: 14,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 3,
  },
  badgeText: {
    color: "white",
  },
});
