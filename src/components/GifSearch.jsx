import { Component } from "react";
import axios from "axios";

export const API_KEY = "XcfTWaRa2vqW0p05yYu7r5WHAWdYHKRf";
export const BASE_URL = "https://api.giphy.com/v1/gifs/search";

export default class GifSearch extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Введіть ключове слово"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit">Пошук</button>
      </form>
    );
  }
}
