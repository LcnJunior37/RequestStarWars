import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Btn from "./components/Btn";


class App extends Component {
  state = {
    request: {},
    movies: [],
    load: true
  };
  componentWillMount() {
    this.apiRequest();
  }

  apiRequest = async () => {
    this.setState({ load: true });

    await axios
      .get(
        "https://swapi.co/api/planets/" +
          (Math.floor(Math.random() * (61 - 1)) + 1) +
          "/"
      )
      .then(response => {
        this.setState({
          request: response.data,
          load: false
        });
      });
  };

  isLoading() {
    if (this.state.load) {
      return <h1>Carregando ....</h1>;
    } else {
      return (
        <div className="info">
          <h1>Nome: {this.state.request.name}</h1>
          <h1>Clima: {this.state.request.climate}</h1>
          <h1>Diamentro: {this.state.request.diameter}</h1>
          <h1>Gravidade: {this.state.request.gravity}</h1>
          <h1>População: {this.state.request.population}</h1>
          <h1>
            Filmes:
            {this.state.request.films && this.state.request.films.length}
          </h1>
        </div>
      );
    }
  }
  bla() {
    this.apiRequest();
  }

  render() {
    return (
      <div className="App">
        {this.isLoading()}

        {<Btn clickHandler={this.apiRequest} x={this.state.load} />}
      </div>
    );
  }
}

export default App;
