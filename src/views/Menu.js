import React, { Component } from "react";
import { ScrollView, StyleSheet, View, FlatList } from "react-native";

import Text from "../components/SmartText";

import { getFoodicsProducts } from "../api";

export default class Menu extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.getMenuItems();
  }

  getMenuItems = async () => {
    const { token, setAppState } = this.props;
    try {
      const products = await getFoodicsProducts(token);
      if (products.length && products !== this.state.products) {
        this.setState({
          products
        });
      }
    } catch (e) {
      setAppState({
        error: e
      });
    }
  };

  render() {
    const { setAppState } = this.props;
    const { products } = this.state;

    const {
      container,
      titleBar,
      titleBarText,
      innerContainer,
      productList
    } = styles;

    return (
      <ScrollView style={container}>
        <View style={[titleBar, innerContainer]}>
          <Text type="title">Mama Jamila Menu</Text>
          <Text type="subtitle" style={[{ fontSize: 16 }, titleBarText]}>
            Browse our menu, customize your favorites and order with ease.
          </Text>
        </View>
        <View style={[productList, innerContainer]}>
          {products.length ? (
            <FlatList
              data={products}
              renderItem={({ item }) => (
                <View>
                  <Text type="title">{item.name.en}</Text>
                </View>
              )}
            />
          ) : (
            <Text type="info">
              We currently cannot display any products due to lack of inventory
              or internal server error. Please try again later!
            </Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleBarText: { textAlign: "center" },
  container: {
    paddingVertical: 48,
    paddingHorizontal: 32,
    backgroundColor: "transparent"
  },
  titleBar: {},
  innerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "rgba(242, 240, 221, 0.8)"
  },
  productList: {}
});
