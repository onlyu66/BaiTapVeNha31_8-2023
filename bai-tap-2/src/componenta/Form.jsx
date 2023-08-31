import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  display = () => {
    this.setState({ value: document.getElementById("text").value });
  };
  render() {
    return (
      <div>
        <form>
          <input type="text" id="text" />
          <button onClick={this.display}>Hiển thị</button>
        </form>
        <p>{this.state.value}</p>
      </div>
    );
  }
}
