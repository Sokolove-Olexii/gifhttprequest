import React, { Component } from "react";
import axios from "axios";
import GifSearch from "./components/GifSearch";
import GifList from "./components/GifList";

export default class App extends Component {
  state = {
    searchQuery: "",
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };
  render() {
    return (
      <div>
        <GifSearch onSearch={this.handleSearch} />
        <GifList query={this.state.searchQuery} />
      </div>
    );
  }
}
