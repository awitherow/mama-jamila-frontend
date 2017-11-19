import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  TextInput
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
            <Text style={styles.buttonText}>SELFIE</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            onChangeText={text => this.setState({ username: text })}
            value={this.state.username}
          />
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
    borderColor: "rgba(170, 158, 41, 0.5)"
  },
  placeholder: {
    backgroundColor: "rgba(170, 158, 41, 0.5)"
  },
  button: {
    marginTop: 8,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(170, 158, 41, 0.5)",
    alignSelf: "flex-end"
  },
  buttonText: {
    fontFamily: "medium",
    fontSize: 16
  }
});
