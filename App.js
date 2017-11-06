import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from "react-native";

import { Font } from "expo";

export default class App extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      light: require("./src/assets/fonts/PFDinTextAR-Light.ttf"),
      regular: require("./src/assets/fonts/PFDinTextAR-Regular.ttf"),
      medium: require("./src/assets/fonts/PFDinTextAR-Medium.ttf")
    });

    this.setState({ loading: false });

    // this.refs.body.fadeIn();
  }

  render() {
    return (
      <Image
        style={styles.backgroundImage}
        source={require("./src/assets/intro-bg.jpg")}
      >
        {this.state.loading ? null : (
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <View style={styles.titleBackground}>
                <Text style={styles.title}>Mama Jamila</Text>
                <Text style={styles.subline}>A cute little subline</Text>
              </View>
            </View>
            <TouchableHighlight style={styles.goButton}>
              <Text>Let's go!</Text>
            </TouchableHighlight>
          </View>
        )}
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
  },
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
    paddingHorizontal: 16
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
    padding: 24,
    justifyContent: "center",
    alignItems: "center"
  }
});
