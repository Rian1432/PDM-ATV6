import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  DEFAULT_PADDING,
  PRIMARY_COLOR,
  DEFAULT_FOOTER_HEIGHT,
} from "@/constants/globalStyles";
import PriceTag from "./PriceTag";

export default function SubmitCheckout() {
  return (
    <View style={styles.container}>
      <View style={styles.footerPartial}>
        <Text>Tudo</Text>
      </View>

      <View style={styles.footerPartial}>
        <Text>Sub-total</Text>
        <PriceTag price={19.6} />
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continuar(1)</Text>
      </TouchableOpacity>
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
  },
  footerPartial: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    textAlign: "center",
    flexDirection: "row",
    gap: 5,
  },
  continueButton: {
    backgroundColor: PRIMARY_COLOR,
    fontFamily: "sans",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 1,
    height: DEFAULT_FOOTER_HEIGHT,
  },
  continueButtonText: {
    color: "white",
  },
});
