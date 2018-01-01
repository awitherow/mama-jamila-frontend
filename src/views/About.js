import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableHighlight
} from "react-native";
import { MapView, Linking } from "expo";

const { height, width } = Dimensions.get("window");

const socialIcons = [
  {
    name: "Instagram",
    icon: require("../assets/icons/social/ig.png"),
    url: "https://www.instagram.com/mama_jamila_/"
  },

  {
    name: "Website",
    icon: require("../assets/icons/social/www.png"),
    url: "https://www.instagram.com/mama_jamila_/"
  }
];

export default function About() {
  return (
    <ScrollView>
      <MapView
        style={{ width, height: height * 0.6 }}
        initialRegion={{
          latitude: 21.3884738,
          longitude: 39.7852931,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>Mama Jamila Café</Text>
        <Text style={styles.subTitleText}>
          Homemade quality snacks and drinks, personalized just for you.
        </Text>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          aliquet mi in semper vulputate. In vitae neque velit. Vestibulum
          lectus ligula, laoreet sit amet tincidunt ut, pulvinar aliquet erat.
          Cras rhoncus ultrices finibus. Aliquam molestie tristique rutrum.
        </Text>
        <View style={styles.socialContainer}>
          {socialIcons.map(social => (
            <TouchableHighlight
              key={social.name}
              onPress={() => Linking.openURL(social.url)}
            >
              <Image source={social.icon} style={styles.icon} />
            </TouchableHighlight>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    paddingVertical: 24,
    paddingHorizontal: 48,
    backgroundColor: "rgba(242, 240, 221, 0.8)"
  },
  titleText: {
    fontFamily: "medium",
    fontSize: 32
  },
  subTitleText: {
    fontFamily: "regular",
    fontSize: 24,
    marginBottom: 8
  },
  bodyText: {
    fontFamily: "light",
    fontSize: 16
  },
  socialContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginVertical: 48,
    marginHorizontal: 24
  },
  icon: {
    width: 64,
    height: 64
  }
});
