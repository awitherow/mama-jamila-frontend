import React, { Component } from "react";
import { Modal } from "react-native";

export default class MagicModal extends Component {
  renderChildren = id => {
    const { setAppState } = this.props;

    const shared = {
      setAppState
    };

    switch (id) {
      case "addUser":
        return <AddUser {...shared} />;
      default:
        return null;
    }
  };

  render() {
    const { visible } = this.props;

    return (
      <Modal
        visible={visible}
        animationType="slide"
        onDismiss={() => setAppState("modal")}
      >
        {this.renderChildren(visible)}
      </Modal>
    );
  }
}
