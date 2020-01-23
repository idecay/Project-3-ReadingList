import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SingleBook extends Component {
  state = {
    book: {
      title: "",
      author: "",
      id: 0,
      description: "",
      image: "",
      genreId: {}
    },
    redirect: false
  };

  componentDidMount() {
    axios.get(`/api/book/${this.props.match.params.bookId}`).then(res => {
      this.setState({ book: res.data });
    });
  }

  onBookDeleteClick = bookId => {
    axios.delete(`api/book/${this.props.match.params.bookId}`).then(() => {
      this.setState({ redirect: true });
    });
    console.log(bookId);
  };

  onChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    const newState = { ...this.state };
    newState.book[name] = value;
    this.setState(newState);
  };

  onSubmit = event => {
    event.preventDefault();
    axios.put(`/api/book/${this.props.match.params.bookId}`, this.state.book);
  };

  render() {
    return (
      <div>
        {this.state.redirect === true ? <Redirect to="/home" /> : null}
        <h1>Single Book</h1>
        <img
          src={this.state.book.image}
          alt="Book Cover"
          height="300px"
          width="200px"
        />
        <h1>{this.state.book.title}</h1>
        <h4>By {this.state.book.author}</h4>
        <h4>Genre: {this.state.book.genreId.name}</h4>
        <p>{this.state.book.description}</p>

        <h1>Rating</h1>
        <img src="#" alt="rating" />

        <button
          onClick={() => this.onBookDeleteClick(this.props.match.params.bookId)}
        >
          Delete
        </button>
      </div>
    );
  }
}
