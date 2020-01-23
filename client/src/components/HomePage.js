import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";

export default class HomePage extends Component {
  state = {
    bookList: [],
    newBook: {
      name: "",
      description: ""
    },
    bookListActive: false
  };

  componentDidMount() {
    axios.get("/api/book").then(res => {
      this.setState({ title: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="title">
          <h1>ReadingList</h1>
        </div>
        <Search />
      </div>
    );
  }
}
