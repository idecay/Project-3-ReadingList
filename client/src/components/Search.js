import React, { Component } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";

export default class Search extends Component {
  state = {
    query: "",
    results: []
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };

  getInfo = () => {
    axios.get("/api/book").then(res => {
      this.setState({ results: res.data });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="search">
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search..."
                ref={input => (this.search = input)}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="submit">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
