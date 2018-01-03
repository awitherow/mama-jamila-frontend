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
import About from "./About";
import Menu from "./Menu";

// components
import Navbar from "../components/Navbar";
import MagicModal from "../components/MagicModal";

export default class Dashboard extends React.Component {
  state = {
    dashboardView: "menu"
  };

  componentDidMount() {
    if (!Boolean(this.props.user)) {
      this.setState({
        modal: "addUser"
      });
    }
  }

  setDashboardView = view => this.setState({ dashboardView: view });

  renderDashboardView = () => {
    const { token, setAppState } = this.props;
    switch (this.state.dashboardView) {
      case "profile":
        return <Profile />;
      case "menu":
        return <Menu token={token} setAppState={setAppState} />;
      case "about":
        return <About />;
    }
  };

  render() {
    const { dashboardView, modal } = this.state;
    const { setAppState } = this.props;

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
    justifyContent: "flex-end"
  },
  dashboardView: {
    flex: 1,
    padding: 48,
    width,
    backgroundColor: "rgba(242, 240, 221, 0.8)"
  }
});
