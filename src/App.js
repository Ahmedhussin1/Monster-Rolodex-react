import { component } from "react";
import React from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monster:[
        {name:'linda'},
        {name:'frank'},
        {name:'jacky'},
      ]
    };
  }
// ---------------------
  render() {
    return (
      <div className="App">
        {this.state.monster.map((monster)=>{
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
// -----------------------
}

export default App;
