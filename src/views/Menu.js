import React, { Component } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default class Menu extends Component {
  state = {
    user: {}
  };

  componentDidMount() {}

  render() {
    const { setMainState } = this.props;

    return (
      <ScrollView>
        <Text>Hello</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
