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
          <input
            type="text"
            placeholder="Search..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <SearchResult results={this.state.results} />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

/* bookList: [
      {
        tile: "The Gunslinger",
        author: "Stephen King",
        id: 1,
        description: "",
        image:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.wikia.nocookie.net%2F__cb20110901183323%2Fdarktower%2Fimages%2F2%2F27%2FThe_Gunslinger1.jpg&f=1&nofb=1"
      },
      {
        title: "The Lion the Witch and the Wardrobe",
        author: "C.S. Lewis",
        id: 2,
        description: "",
        image:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fchemainustheatrefestival.ca%2Fwp-content%2Fuploads%2F2016%2F11%2F2017_show_lion.jpg&f=1&nofb=1"
      },
      {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        id: 3,
        description: "",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fd%2Fdc%2FThe_Hunger_Games.jpg%2F220px-The_Hunger_Games.jpg&f=1&nofb=1"
      },
      {
        title: "Harry Potter and the Sorcerors Stone",
        author: "J.K. Rowling",
        id: 4,
        description: "",
        image:
          "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F_9W21flj_sCU%2FTOLe_Wz1v7I%2FAAAAAAAAAK4%2Fl3o_sQo4MWg%2Fs1600%2Fharry_potter_and_the_sorcerers_stone.jpg&f=1&nofb=1"
      },
      {
        title: "The Fifth Wave",
        author: "Rick Yancey",
        id: 5,
        description: "",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F512And8xM0L._SY344_BO1%2C204%2C203%2C200_.jpg&f=1&nofb=1"
      }
    ] */
