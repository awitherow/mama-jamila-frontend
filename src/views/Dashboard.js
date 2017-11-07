import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

export default function Dashboard({ setView }) {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setView("profile")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/icons/profile.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setView("menu")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/icons/menu.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setView("settings")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/icons/settings.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width,
    padding: 24,
    backgroundColor: "rgba(170, 158, 41, 0.5)"
  },
  iconButton: {
    marginHorizontal: 24
  },
  icon: {
    height: 32,
    width: 32
  }
});
