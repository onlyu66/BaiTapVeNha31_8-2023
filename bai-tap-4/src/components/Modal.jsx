import React, { Component } from "react";

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      modal: "<div>ccc</div>",
      isOpened: false,
    };
  }
  handleModal = () => {
    this.setState({ isOpened: !this.state.isOpened });
    {
      !this.state.isOpened
        ? document.getElementById("modal").style.display = "none"
        : document.getElementById("modal").style.display = "block"
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.handleModal}>X</button>
        <div id="modal" style={{backgroundColor: "yellowgreen", width: 777, height: 100}}>{this.state.modal}</div>
      </div>
    );
  }
}
