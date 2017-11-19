import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";

import Profile from "./Profile";

export default class Dashboard extends React.Component {
  state = {
    dashboardView: "menu"
  };

  setDashboardView = view => this.setState({ dashboardView: view });

  renderDashboardView = () => {
    switch (this.state.dashboardView) {
      case "profile":
        return <Profile containerStyle={styles.dashboardView} />;
      case "menu":
        return (
          <View style={styles.dashboardView}>
            <Text>Menu</Text>
          </View>
        );
      case "about":
        return (
          <View style={styles.dashboardView}>
            <Text>About</Text>
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
              source={require("../assets/icons/info.png")}
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
    backgroundColor: "rgba(242, 240, 221, 0.66)",
    alignItems: "center"
  },
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
