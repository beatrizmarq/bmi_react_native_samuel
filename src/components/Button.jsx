import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../constants";

export function Button({ onPress, title, secondary }) {
  const backgroundColor = secondary ? colors.purpleLight : colors.purple;

  const buttonStyles = { ...styles.button, backgroundColor };

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.purple,
    borderWidth: 1,
    padding: 16,
    marginVertical: 8,
    borderColor: colors.purple,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
  },
});
