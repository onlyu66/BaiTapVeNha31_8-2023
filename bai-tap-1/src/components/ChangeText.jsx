import React, { Component } from "react";

export default class ChangeText extends Component {
  constructor() {
    super();
    this.state = {
      text: `[Bài tập] 1. Hiển thị nội dung động với nút bấm.

1. Mục tiêu
Luyện tập và nắm được cách sử dụng state và event trong React.


2. Mô tả
Xây dựng  một dự án đơn giản để hiển thị một đoạn văn bản và một button, khi nhấn vào button, đoạn văn bản sẽ thay đổi.
Bước 1: Tạo 1 component gồm 1 đoạn văn bản và 1 nút button.
Bước 2: Khai báo 1 state để lưu trữ nội dung đoạn văn bản.
Bước 3: Khai báo hàm để thay đổi nội dung của đoạn văn trước đó thông qua hàm setState() và gọi nó khi có sự kiện onClick vào nút button.
Bước 4: HIển thị giá trị của state tại thẻ đoạn văn p ở phần render để hiển thị ra màn hình.


3. Đánh giá
Để hoàn thành bài thực hành, học viên cần:
Đưa mã nguồn lên GitHub.
Dán link của repository lên phần nộp bài trên hệ thống.
`,
      isChanged: false,
    };
  }
  handleText = () => {
    this.setState({isChanged: !this.state.isChanged});
    {
        !this.state.isChanged
          ? this.setState({
              text: `[Bài tập] 2. Hiển thị nội dung người dùng nhập vào từ ô input
  
  1. Mục tiêu
  Luyện tập và nắm được cách sử dụng props, state và event trong React.
  
  
  2. Mô tả
  Xây dựng  một dự án cho phép người dùng nhập vào 1 nội dung và hiển thị nó ra màn hình.
  Hướng dẫn thực hiện :
  
  
  Bước 1: Trong component App tạo component Form gồm 1 ô input và 1 nút button. Khi người dùng nhập vào ô input và ấn nút button đó thì nội dung sẽ được hiển thị ở 1 thẻ p bên dưới.
  <App>
      <Form/>
      <p></p>
  </App>
  
  
  Bước 2: Tạo 1 state để quản lý nội dung người dùng nhập vào, gắn sự kiện onChange vào ô input để cập nhật giá trị của state mối khi người dùng nhập.
  
  
  Bước 3: Gắn sự kiện onClick khi người dùng nhấn vào button thì hiển thị nội dung ra màn hình.
  
  
  3. Đánh giá
  Để hoàn thành bài thực hành, học viên cần:
  Đưa mã nguồn lên GitHub.
  Dán link của repository lên phần nộp bài trên hệ thống.
  `,
            })
          : this.setState({text: `[Bài tập] 1. Hiển thị nội dung động với nút bấm.

          1. Mục tiêu
          Luyện tập và nắm được cách sử dụng state và event trong React.
          
          
          2. Mô tả
          Xây dựng  một dự án đơn giản để hiển thị một đoạn văn bản và một button, khi nhấn vào button, đoạn văn bản sẽ thay đổi.
          Bước 1: Tạo 1 component gồm 1 đoạn văn bản và 1 nút button.
          Bước 2: Khai báo 1 state để lưu trữ nội dung đoạn văn bản.
          Bước 3: Khai báo hàm để thay đổi nội dung của đoạn văn trước đó thông qua hàm setState() và gọi nó khi có sự kiện onClick vào nút button.
          Bước 4: HIển thị giá trị của state tại thẻ đoạn văn p ở phần render để hiển thị ra màn hình.
          
          
          3. Đánh giá
          Để hoàn thành bài thực hành, học viên cần:
          Đưa mã nguồn lên GitHub.
          Dán link của repository lên phần nộp bài trên hệ thống.
          `});
      }
  };
  render() {
    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.handleText}>Click me</button>
      </div>
    );
  }
}
