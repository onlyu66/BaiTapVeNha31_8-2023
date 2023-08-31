import React, { Component } from "react";

export default class Table extends Component {
  
  render() {
    const {students} = this.props;
    return (
      <div>
        <table border={1} cellSpacing={0} cellPadding={7}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  }
}
