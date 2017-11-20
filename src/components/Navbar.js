import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";

export default function Navbar({ setView, view }) {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setView("profile")}
      >
        <Image
          style={styles.icon}
          source={
            view === "profile"
              ? require("../assets/icons/profile-alt.png")
              : require("../assets/icons/profile.png")
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setView("menu")}
      >
        <Image
          style={styles.icon}
          source={
            view === "menu"
              ? require("../assets/icons/menu-alt.png")
              : require("../assets/icons/menu.png")
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => setView("about")}
      >
        <Image
          style={styles.icon}
          source={
            view === "about"
              ? require("../assets/icons/info-alt.png")
              : require("../assets/icons/info.png")
          }
        />
      </TouchableOpacity>
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width,
    padding: 20,
    backgroundColor: "rgba(170, 158, 41, 0.5)"
  },
  iconButton: {
    marginHorizontal: 24
  },
  icon: {
    height: 28,
    width: 28
  }
});
