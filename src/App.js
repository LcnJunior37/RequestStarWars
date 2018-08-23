import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
 
class App extends Component {
  state ={
    request:{}
  };
  componentWillMount(){
    this.apiRequest();
  }
 
     
  
  apiRequest(){
    axios.get("https://swapi.co/api/planets/"+(Math.floor(Math.random() * (61 - 1)) + 1)+"/").then(response => {
      this.setState({
        request:response.data
      });
    });
  }
 
  render() {
    return (
      <div className="App">
       {console.log(this.state.request.name)
       }
       <div className="info">
          <h1>Nome: {this.state.request.name }</h1>
          <h1>Clima: {this.state.request.climate }</h1>
          <h1>Diamentro: {this.state.request.diameter }</h1>
          <h1>Gravidade:  {this.state.request.gravity }</h1>
          <h1>População: {this.state.request.population}</h1>
       </div>
      </div>
    );
  }
}

export default App;
