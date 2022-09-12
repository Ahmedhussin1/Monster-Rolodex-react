import { component } from "react";
import React from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monster: users }; //now monster points to user and have all of its properties
          },
          () => {
            console.log(this.state); //callback function
          }
        )
      );
  }
  // -------search function--------------
  onSearch=(event) => {
            const searchField = event.target.value.toLocaleLowerCase(); //takes the written value from the search box
            this.setState(() => {
              return { searchField: searchField };
            });
          }
  // ---------------------
  render() {
    // destructuring 
    const {monster,searchField}=this.state;
    const {onSearch}=this;

    const filteredMonster =monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        {/* search box */}
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearch} //using this key word because now onSearch is considered as a method to the main class
        />
        {/* --------- */}

        {filteredMonster.map((monsterName) => {
          return (
            <div key={monster.id}>
              <h1>{monsterName.name}</h1>
              <h1>{monsterName.id}</h1>
            </div>
          );
        })}
      </div>
    );
  }
  // -----------------------
}

export default App;
