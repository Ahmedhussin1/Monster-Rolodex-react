import { component } from "react";
import React from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json() )
    .then((users) => console.log(users))
  }
  // ---------------------
  render() {
    return (
      <div className="App">
        {this.state.monster.map((monsterName) => {
          return (
            <div key={this.state.monster.id}>
              <h1>{monsterName.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
  // -----------------------
}

export default App;
