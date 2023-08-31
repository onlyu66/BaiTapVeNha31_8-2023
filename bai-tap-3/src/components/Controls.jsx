import React, { Component } from "react";

export default class Controls extends Component {
  render() {
    const { searchText, onSearchChange, onSortChange } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="address">Address</option>
        </select>
      </div>
    );
  }
}
