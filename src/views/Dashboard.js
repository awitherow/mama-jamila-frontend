import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";

// views
import Profile from "./Profile";

// components
import Navbar from "../components/Navbar";

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
    const { dashboardView } = this.state;

    return (
      <View style={styles.container}>
        {this.renderDashboardView()}
        <Navbar view={dashboardView} setView={this.setDashboardView} />
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
  }
});
