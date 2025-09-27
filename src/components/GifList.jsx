import { Component } from "react";
import axios from "axios";
import { BASE_URL } from "./GifSearch";
import { API_KEY } from "./GifSearch";

export default class GifList extends Component {
  state = {
    gifs: [],
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query && this.props.query) {
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            api_key: API_KEY,
            q: this.props.query,
            limit: 15,
          },
        });
        this.setState({ gifs: response.data.data });
      } catch (error) {
        console.error("Виникла помилка:", error);
      }
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          api_key: API_KEY,
          q: "cats",
          limit: 15,
        },
      });
      this.setState({ gifs: response.data.data });
    } catch (error) {
      console.error("Виникла помилка:", error);
    }
  }

  render() {
    const { gifs } = this.state;
    return (
      <div>
        {gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
          ></img>
        ))}
      </div>
    );
  }
}
