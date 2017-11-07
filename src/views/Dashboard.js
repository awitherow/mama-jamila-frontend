import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";

export default class Dashboard extends React.Component {
  state = {
    dashboardView: "menu"
  };

  setDashboardView = view => this.setState({ dashboardView: view });

  renderDashboardView = () => {
    switch (this.state.dashboardView) {
      case "profile":
        return (
          <View style={styles.dashboardView}>
            <Text>Profile</Text>
          </View>
        );
      case "menu":
        return (
          <View style={styles.dashboardView}>
            <Text>Menu</Text>
          </View>
        );
      case "about":
        return (
          <View style={styles.dashboardView}>
            <Text>about</Text>
          </View>
        );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderDashboardView()}
        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => this.setDashboardView("profile")}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/profile.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => this.setDashboardView("menu")}
          >
            <Image
              style={styles.icon}
              source={require("../assets/icons/menu.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => this.setDashboardView("about")}
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
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  dashboardView: {
    flex: 1,
    padding: 48,
    width,
    backgroundColor: "rgba(242, 240, 221, 0.66)"
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
