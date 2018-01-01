import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  AsyncStorage,
  TextInput
} from "react-native";

import { ImagePicker } from "expo";

export default class Profile extends React.Component {
  state = {
    image: null,
    username: ""
  };

  async componentDidMount() {
    try {
      const image = await AsyncStorage.getItem("@MJ:pic");
      if (image !== null) {
        this.setState({ image });
      }
      const username = await AsyncStorage.getItem("@MJ:username");
      if (username !== null) {
        this.setState({ username });
      }
    } catch (error) {
      console.warn("[WARN]: could not retrieve profile pic from async storage");
    }
  }

  setUsername = async username => {
    this.setState({
      username
    });

    try {
      await AsyncStorage.setItem("@MJ:username", username);
      console.log("[INFO]: saved username to async storage");
    } catch (error) {
      console.warn("[WARN]: could not save username to async storage");
    }
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (!result.cancelled) {
      this.setState({ image: result.base64 });

      try {
        await AsyncStorage.setItem("@MJ:pic", result.base64);
        console.log("[INFO]: saved profile pic to async storage");
      } catch (error) {
        console.warn("[WARN]: could not save profile pic to async storage");
      }
    }
  };

  getProgramPoints = () => {
    return 1000;
  };

  getFavoriteCount = () => {
    return 3;
  };

  getFavorites = () => {
    return [];
  };

  render() {
    const { image, username } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image
              source={{ uri: `data:image/jpeg;base64,${image}` }}
              style={styles.photo}
            />
          ) : (
            <View style={[styles.placeholder, styles.photo]} />
          )}
          <TouchableOpacity style={styles.button} onPress={this.pickImage}>
            <Image
              style={styles.icon}
              source={require("../assets/icons/add-alt.png")}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.usernameInput}
          onChangeText={username => this.setUsername(username)}
          placeholder="My Username"
          value={this.state.username}
        />
        <View style={styles.profileContainer}>
          <View style={styles.profileItem}>
            <Text style={styles.profileItemTitle}>Loyalty Points</Text>
            <Text style={styles.profileItemValue}>
              {this.getProgramPoints()}
            </Text>
          </View>
          <Text style={styles.miniInfo}>
            More information on Loyalty Points coming soon!
          </Text>
          <View style={styles.profileItem}>
            <Text style={styles.profileItemTitle}>Favorites</Text>
            <Text style={styles.profileItemValue}>
              {this.getFavoriteCount()}
            </Text>
          </View>
          <Text style={styles.miniInfo}>
            More information on Favorite Items coming soon!
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const { height, width } = Dimensions.get("window");

const SELFIE_WIDTH = width * 0.5;

const styles = StyleSheet.create({
  container: {
    padding: 32
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 48,
    marginBottom: 24
  },
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
    bottom: SELFIE_WIDTH * 0.1,
    right: SELFIE_WIDTH * 0.25,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderColor: "white",
    alignSelf: "flex-end",
    borderRadius: 32
  },
  icon: {
    height: 24,
    width: 24
  },
  profileContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "rgba(242, 240, 221, 0.8)",
    padding: 16
  },
  usernameInput: {
    marginBottom: 24,
    alignSelf: "stretch",
    textAlign: "center",
    marginVertical: 12,
    fontFamily: "regular",
    fontSize: 32
  },
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginVertical: 8
  },
  profileItemTitle: {
    fontFamily: "medium",
    fontSize: 24,
    textAlign: "right"
  },
  profileItemValue: {
    fontFamily: "regular",
    fontSize: 20,
    textAlign: "right",
    marginLeft: "auto"
  },
  miniInfo: {
    fontFamily: "light",
    fontSize: 16
  }
});
