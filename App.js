import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";

// react native
import { Font } from "expo";

// views
import Welcome from "./src/views/Welcome";
import Dashboard from "./src/views/Dashboard";

// api
import { getFoodicsAuthToken } from "./src/api";

// App
export default class App extends React.Component {
  state = {
    loading: true,
    view: "welcome",
    token: "",
    error: ""
  };

  setAppState = (key, val) =>
    this.setState({
      [key]: val
    });

  getAuth = async () => {
    try {
      const token = await getFoodicsAuthToken();
      if (typeof token === "string") {
        this.setState({
          token
        });
      }
    } catch (e) {
      this.setState({
        error: e
      });
    }
  };

  async componentDidMount() {
    await Font.loadAsync({
      light: require("./src/assets/fonts/PFDinTextAR-Light.ttf"),
      regular: require("./src/assets/fonts/PFDinTextAR-Regular.ttf"),
      medium: require("./src/assets/fonts/PFDinTextAR-Medium.ttf")
    });

    await this.getAuth();
    this.setState({ loading: false });
  }

  renderContent = () => {
    const { view } = this.state;
    const sharedProps = {
      setAppState
    };

    const WELCOME_SCREEN = <Welcome {...sharedProps} />;

    switch (view) {
      case "dashboard":
        return <Dashboard {...sharedProps} />;
      default:
        return WELCOME_SCREEN;
    }
  };

  render() {
    const { loading, error } = this.state;

    if (error) {
      Alert.alert("Whoops!", error, [
        { text: "Understood", onPress: () => this.setState({ error: null }) }
      ]);
    }

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
