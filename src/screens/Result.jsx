import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "../components/Card";
import { colors } from "../constants";

export function Result({ navigation, route }) {
  const { imc } = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.imcWrapper}>
          <Text style={styles.imcText}>IMC</Text>
          <Text style={styles.imcText}>{imc.toFixed(2)}</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.imcMessage}>
          <Text style={styles.imcText2}>
            Seu IMC se encaixa na faixa: {message}
          </Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  imcWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  imcText: {
    fontSize: 24,
    color: colors.white,
  },
  imcText2: {
    fontSize: 20,
    color: colors.orange,
  },
  imcMessage: {
    justifyContent: "center",
    alignItems: "center",
  },
});
