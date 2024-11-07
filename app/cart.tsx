import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ScrollableWithFooter from "@/components/containers/ScrollableWithFooter";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import Card from "@/components/containers/Card";
import Badge from "@/components/checkout/Badge";

export default function teste() {
  return (
    <ScrollableWithFooter>
      <HeaderWithTitle title="Carrinho" />

      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>

      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.cardHeaderContainer}>
          <View style={styles.cardHeaderTitleContainer}>
            <Badge content="Indicado" />
            <Text style={styles.cardHeaderTitle}>Choice Oficial</Text>
          </View>

          <Text>Editar</Text>
        </View>
      </Card>
    </ScrollableWithFooter>
  );
}

const styles = StyleSheet.create({
  cardHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeaderTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  cardHeaderTitle: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
