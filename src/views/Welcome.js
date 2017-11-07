import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

export default function Welcome({ setView }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleBackground}>
          <Text style={styles.title}>Mama Jamila</Text>
          <Text style={styles.subline}>A cute little subline</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => setView("dashboard")}
        style={styles.goButton}
      >
        <Text style={styles.buttonText}>ENTER THE SHOP</Text>
      </TouchableOpacity>
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 48
  },
  titleBackground: {
    backgroundColor: "rgba(242, 240, 221, 0.8)",
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 32,
    textAlign: "right",
    fontFamily: "medium"
  },
  subline: {
    fontSize: 16,
    textAlign: "right",
    fontFamily: "light"
  },
  goButton: {
    width,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(170, 158, 41, 0.5)"
  },
  buttonText: {
    fontFamily: "medium",
    fontSize: 16
  }
});
