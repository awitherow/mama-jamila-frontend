import React from "react";
import { Text, StyleSheet } from "react-native";

export default function SmartText({ type, children, style }) {
  return <Text style={[styles[type], style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "medium",
    fontSize: 32
  },
  subtitle: {
    fontFamily: "regular",
    fontSize: 24,
    marginBottom: 8
  },
  body: {
    fontFamily: "light",
    fontSize: 16
  },
  small: {
    fontFamily: "light",
    fontSize: 16
  }
});
