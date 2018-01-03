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

// components
import MagicModal from "./src/components/MagicModal";

// api
import { getFoodicsAuthToken, getFoodicsUserProfile } from "./src/api";

// App
export default class App extends React.Component {
  state = {
    loading: true,
    view: "welcome",
    modal: "",
    token: "",
    error: "",
    user: {}
  };

  async componentDidMount() {
    await Font.loadAsync({
      light: require("./src/assets/fonts/PFDinTextAR-Light.ttf"),
      regular: require("./src/assets/fonts/PFDinTextAR-Regular.ttf"),
      medium: require("./src/assets/fonts/PFDinTextAR-Medium.ttf")
    });

    await this.getAuth();
    //  await this.getUser();

    this.setState({ loading: false });
  }

  setAppState = (key, val) =>
    this.setState({
      [key]: val
    });

  // getUser = async () => {
  //   try {
  //     // TODO: check async storage,
  //     // if not there, return and let know need to create one.
  //     const user = await getFoodicsUserProfile();
  //     if (user === "welcome") {
  //       this.setState({ modal: "welcomeWizard" });
  //       return;
  //     }

  //     this.setState({ user });
  //   } catch (e) {
  //     this.setState({
  //       error: e
  //     });
  //   }
  // };

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

  renderContent = () => {
    const { view, token } = this.state;
    const sharedProps = {
      setAppState: this.setAppState,
      token
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
    const { loading, error, modal } = this.state;

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
        <MagicModal visible={Boolean(modal)} setMainState={this.setAppState} />
        {/* TODO: add loading state */}
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
