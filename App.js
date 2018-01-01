import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

import { Font } from "expo";

import Welcome from "./src/views/Welcome";
import Dashboard from "./src/views/Dashboard";

export default class App extends React.Component {
  state = {
    loading: true,
    view: "welcome"
  };

  async componentDidMount() {
    await Font.loadAsync({
      light: require("./src/assets/fonts/PFDinTextAR-Light.ttf"),
      regular: require("./src/assets/fonts/PFDinTextAR-Regular.ttf"),
      medium: require("./src/assets/fonts/PFDinTextAR-Medium.ttf")
    });

    this.setState({ loading: false });
  }

  renderContent = () => {
    const { view } = this.state;
    const sharedProps = {
      setView: this.setView
    };

    const WELCOME_SCREEN = <Welcome {...sharedProps} />;

    switch (view) {
      case "welcome":
        return WELCOME_SCREEN;
      case "dashboard":
        return <Dashboard {...sharedProps} />;
      default:
        return WELCOME_SCREEN;
    }
  };

  setView = view => this.setState({ view });

  render() {
    const { loading } = this.state;
    return (
      <Image
        style={styles.backgroundImage}
        source={require("./src/assets/bg.jpg")}
      >
        {loading ? null : this.renderContent()}
      </Image>
    );
  }
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: null
  }
});
