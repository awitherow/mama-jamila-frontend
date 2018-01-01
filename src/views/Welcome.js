import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

export default function Welcome({ setMainState }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleBackground}>
          <Text style={styles.title}>Mama Jamila</Text>
          <Text style={styles.subline}>
            Homemade quality snacks and drinks, personalized just for you.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => setMainState("view", "dashboard")}
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
    paddingHorizontal: 16,
    maxWidth: width * 0.8
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
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(170, 158, 41, 0.5)"
  },
  buttonText: {
    fontFamily: "medium",
    fontSize: 16
  }
});
