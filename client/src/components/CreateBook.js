import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class CreateBook extends Component {
  state = {
    bookList: [],
    genreList: [],
    newBook: {
      title: "",
      author: "",
      id: 0,
      description: "",
      image: "",
      genreId: {}
    },
    selectedGenre: "",
    redirect: false,
    cancelRedirect: false
  };

  componentDidMount() {
    axios
      .get("/api/book")
      .then(res => {
        this.setState({ bookList: res.data });
      })
      .then(() => {
        axios.get("/api/genre").then(res => {
          this.setState({ genreList: res.data });
        });
      });
  }

  updatePageBooks = () => {
    axios.get("/api/book").then(res => {
      this.setState({ bookList: res.data });
    });
  };

  onChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const newState = { ...this.state };
    newState.newBook[name] = value;
    this.setState(newState);
  };

  onSubmit = event => {
    event.preventDefault();

    axios.post("/api/book", this.state.newBook).then(() => {
      const newState = { ...this.state };
      newState.newBook = {
        title: "",
        author: "",
        id: 0,
        description: "",
        image: "",
        genreId: ""
      };
      this.setState(newState);
    });
    this.setState({ redirect: true });
    this.updatePageBooks();
  };

  onCancel = () => {
    this.setState({ cancelRedirect: true });
  };

  render() {
    return (
      <div>
        {this.state.redirect === true ? <Redirect to="/library" /> : null}
        {this.state.cancelRedirect === true ? <Redirect to="/home" /> : null}
        <h1>Create Page</h1>
        <form onSubmit={this.onSubmit}>
          <div className="row1">
            <div className="title">
              <label>Title: </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={this.onChange}
                value={this.state.newBook.title}
              />
            </div>
            <div className="author">
              <label>Author: </label>
              <input
                type="text"
                name="author"
                placeholder="Author"
                onChange={this.onChange}
                value={this.state.newBook.author}
              />
            </div>
          </div>
          <div className="row2">
            <div className="image">
              <br />
              <label>Image: </label>
              <input
                type="text"
                name="image"
                placeholder="ImageURL"
                onChange={this.onChange}
                value={this.state.newBook.image}
              />
            </div>
            <div className="genre">
              <br />
              <label>Genre: </label>
              <select
                value={this.state.selectedGenre}
                onChange={e => this.setState({ selectedGenre: e.target.value })}
              >
                <option value="Select a genre">Select a genre</option>
                {this.state.genreList.map(genre => (
                  <option key={genre.value} value={genre.value}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <div className="description">
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.onChange}
              value={this.state.newBook.description}
            />
          </div>
          <br />
          <button onClick={this.onCancel}>Cancel</button>

          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}
