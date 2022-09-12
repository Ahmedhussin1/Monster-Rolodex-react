import { component } from "react";
import React from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
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
  onSearch = (event) => {
    const searchField = event.target.value.toLocaleLowerCase(); //takes the written value from the search box
    this.setState(() => {
      return { searchField: searchField };
    });
  };
  // ---------------------
  render() {
    // destructuring
    const { monster, searchField } = this.state;
    const { onSearch } = this;

    const filteredMonster = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          onchangeHandler={onSearch}
          placeholder="search monster"
          className="search-box"
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
  // -----------------------
}

export default App;
