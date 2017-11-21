import React from "react";
import { ScrollView, StyleSheet, Dimensions, View, Text } from "react-native";
import { MapView } from "expo";

const { height, width } = Dimensions.get("window");

export default function About({ containerStyles }) {
  return (
    <ScrollView style={containerStyles}>
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
        <Text style={styles.valueText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          aliquet mi in semper vulputate. In vitae neque velit. Vestibulum
          lectus ligula, laoreet sit amet tincidunt ut, pulvinar aliquet erat.
          Cras rhoncus ultrices finibus. Aliquam molestie tristique rutrum.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1
  },
  titleText: {
    fontFamily: "medium",
    fontSize: 32,
    paddingTop: 24
  },
  valueText: {
    fontFamily: "light",
    fontSize: 16
  }
});
