import { View, Text, StyleSheet, Switch } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  PRIMARY_COLOR,
  DEFAULT_FOOTER_HEIGHT,
  DEFAULT_PADDING,
} from "@/constants/globalStyles";

export default function CoinsBalance() {
  return (
    <View style={styles.container}>
      <View style={styles.footerPartial}>
        <Text style={styles.fakeIcon}>S</Text>
        <View style={styles.footerDescription}>
          <Text>Saldo de moedas insuficiente</Text>
          <Ionicons name="help-circle-outline" size={20} color="#9A9A9A" />
        </View>
      </View>

      <Switch disabled />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    borderTopWidth: 1,
    borderColor: "#EBEBEB",
    minHeight: DEFAULT_FOOTER_HEIGHT,
    paddingHorizontal: DEFAULT_PADDING,
  },
  footerPartial: {
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    textAlign: "center",
    flexDirection: "row",
    gap: 10,
    flexGrow: 1,
  },
  footerDescription: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  fakeIcon: {
    color: "#EDBC57",
    textAlign: "center",
    borderWidth: 1,
    width: 18,
    borderRadius: 50,
    borderColor: "#EDBC57",
  },
});
