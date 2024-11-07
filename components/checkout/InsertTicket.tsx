import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  BASE_COLOR,
  DEFAULT_FOOTER_HEIGHT,
  DEFAULT_PADDING,
  PRIMARY_COLOR,
} from "@/constants/globalStyles";

export default function InsertTicket() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Ionicons name="ticket-outline" size={20} color={PRIMARY_COLOR} />
        <Text>Cupom Shopee</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.insertTicketLink}>
          Selecione ou insira o código
        </Text>
        <Ionicons name="arrow-forward-circle" size={22} color={BASE_COLOR} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#EBEBEB",
    minHeight: DEFAULT_FOOTER_HEIGHT,
    paddingHorizontal: DEFAULT_PADDING,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    justifyContent: "flex-start",
  },
  insertTicketLink: {
    color: BASE_COLOR,
  },
});
