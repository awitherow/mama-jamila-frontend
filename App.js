import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <Image
        style={styles.backgroundImage}
        source={require("./src/assets/intro-bg.jpg")}
      >
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Mama Jamila</Text>
            <Text style={styles.subline}>A cute little subline</Text>
          </View>
        </View>
        <TouchableHighlight style={styles.goButton}>
          <Text>Let's go!</Text>
        </TouchableHighlight>
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
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 48
  },
  titleBackground: {
    backgroundColor: "rgba(242, 240, 221, 0.8)",
    paddingVertical: 12,
    paddingHorizontal: 24
  },
  title: {
    fontSize: 32,
    textAlign: "right"
  },
  subline: {
    fontSize: 16,
    textAlign: "right"
  },
  goButton: {
    width,
    padding: 24,
    justifyContent: "center",
    alignItems: "center"
  }
});
