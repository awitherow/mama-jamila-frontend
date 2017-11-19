import React from "react";
import { View, Text } from "react-native";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={this.props.containerStyle}>
        <Text>Profile</Text>
      </View>
    );
  }
}
