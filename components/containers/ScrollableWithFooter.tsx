import { DEFAULT_GAP, DEFAULT_PADDING } from "@/constants/globalStyles";
import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import FooterWithButton from "../footers/Footer";
import SubmitCheckout from "../checkout/SubmitCheckout";
import CoinsBalance from "../checkout/CoinsBalance";
import InsertTicket from "../checkout/InsertTicket";

type ScrollableProps = {
  children: ReactNode;
};

export default function ScrollableWithFooter({ children }: ScrollableProps) {
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <View style={styles.container}>{children}</View>
      </ScrollView>

      <FooterWithButton>
        <InsertTicket />
        <CoinsBalance />
        <SubmitCheckout />
      </FooterWithButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    position: "relative",
    flex: 1,
  },
  container: {
    flex: 1,
    padding: DEFAULT_PADDING,
    gap: DEFAULT_GAP * 2,
  },
});
