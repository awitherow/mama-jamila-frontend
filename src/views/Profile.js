import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image
} from "react-native";

import { ImagePicker } from "expo";

export default class Profile extends React.Component {
  state = {
    image: null
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    const { image, username } = this.state;

    return (
      <View style={this.props.containerStyle}>
        <View>
          {image ? (
            <Image source={{ uri: image }} style={styles.photo} />
          ) : (
            <View style={[styles.placeholder, styles.photo]} />
          )}
          <TouchableOpacity style={styles.button} onPress={this.pickImage}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/add-white.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.profileText}>Profile coming soon...</Text>
        </View>
      </View>
    );
  }
}

const { height, width } = Dimensions.get("window");

const SELFIE_WIDTH = width * 0.8;

const styles = StyleSheet.create({
  photo: {
    height: SELFIE_WIDTH,
    width: SELFIE_WIDTH,
    borderRadius: SELFIE_WIDTH / 2,
    borderWidth: 4,
    borderColor: "rgba(0,0,0,0.4)"
  },
  placeholder: {
    backgroundColor: "rgba(170, 158, 41, 0.5)"
  },
  button: {
    position: "absolute",
    bottom: SELFIE_WIDTH * 0.08,
    right: SELFIE_WIDTH * 0.08,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderColor: "white",
    alignSelf: "flex-end",
    borderRadius: 32
  },
  icon: {
    height: 32,
    width: 32
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  profileText: {
    fontSize: 32,
    fontFamily: "medium",
    textAlign: "center"
  }
});
