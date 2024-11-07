import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

type footerProps = {
  children: ReactNode;
};

export default function FooterWithButton({ children }: footerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    flex: 1,
    alignContent: "center",
    flexDirection: "column",
  },
});
