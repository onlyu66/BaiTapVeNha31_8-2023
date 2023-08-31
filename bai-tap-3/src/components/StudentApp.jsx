import React, { Component } from "react";
import Table from "./Table";
import Controls from "./Controls";

export default class StudentApp extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        { id: 1, name: "Nguyễn Văn E", age: 21, address: "Hà Nội" },
        { id: 2, name: "Thái C", age: 24, address: "Sài Gòn" },
        { id: 3, name: "Đặng B", age: 25, address: "Hà Nội" },
        { id: 4, name: "Trần Văn A", age: 20, address: "Thanh Hoá" },
        { id: 5, name: "Thái F", age: 18, address: "Hà Nội" },
        { id: 6, name: "Trần D", age: 22, address: "Nghệ An" },
      ],
      searchText: "",
      sortConfig: null,
    };
  }
  handleSearchChange = (value) => {
    this.setState({ searchText: value });
  };

  handleSortChange = (value) => {
    this.setState({ sortConfig: value });
  };

  filteredAndSortedData = () => {
    const { students, searchText, sortConfig } = this.state;

    let filteredData = students.filter((student) =>
      student.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (sortConfig !== null) {
      filteredData.sort((a, b) => {
        if (a[sortConfig] < b[sortConfig]) {
          return -1;
        }
        if (a[sortConfig] > b[sortConfig]) {
          return 1;
        }
        return 0;
      });
    }

    return filteredData;
  };
  render() {
    return (
      <div>
        <h1>Student List</h1>
        <Controls
          searchText={this.state.searchText}
          onSearchChange={this.handleSearchChange}
          onSortChange={this.handleSortChange}
        />
        <Table students={this.filteredAndSortedData()} />
      </div>
    );
  }
}
