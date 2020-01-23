import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class MyLibrary extends Component {
  state = {
    bookList: [],
    newBook: {
      title: "",
      author: "",
      id: 0,
      description: "",
      image: ""
    }
  };

  componentDidMount() {
    axios.get("/api/book").then(res => {
      this.setState({ bookList: res.data });
    });
  }
  render() {
    return (
      <div>
        <h1>My Library</h1>
        {this.state.bookList.map(book => {
          return (
            <div className="book-container">
              <div className="books">
                <Link to={`/${book._id}`}>
                  <div className="book">
                    <img
                      src={book.image}
                      alt="Book Cover"
                      height="200px"
                      width="150px"
                    />
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
