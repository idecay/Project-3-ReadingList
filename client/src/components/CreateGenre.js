import React, { Component } from "react";
import axios from "axios";

export default class CreateGenre extends Component {
  state = {
    genreList: [],
    newGenre: {
      name: "",
      description: ""
    }
  };

  updatePageGenres = () => {
    axios.get("/api/genre").then(res => {
      this.setState({ genreList: res.data });
    });
  };

  onChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const newState = { ...this.state };
    newState.newGenre[name] = value;
    this.setState(newState);
  };

  onSubmit = event => {
    event.preventDefault();

    axios.post("/api/genre", this.state.newGenre).then(() => {
      const newState = { ...this.state };
      newState.newGenre = {
        name: "",
        description: ""
      };
      this.setState(newState);
    });
    this.setState({ redirect: true });
    this.updatePageGenres();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={this.onChange}
              value={this.state.newGenre.name}
            />
          </div>
          <div className="author">
            <label>Description: </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.onChange}
              value={this.state.newGenre.description}
            />
            <input type="submit" value="Create" />
          </div>
        </form>

        {this.state.genreList.map(genre => {
          return (
            <div>
              <h1>{genre.name}</h1>
              <p>{genre.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
