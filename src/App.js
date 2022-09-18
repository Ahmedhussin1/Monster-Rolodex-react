import { useState } from "react";
import React from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {

  const [searchField,setSearchField]= useState('');
  console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase(); //takes the written value from the search box
    setSearchField(searchFieldString)
  };

  return (
      <div className="App">
      <h1 className="app-title">Monster Rolodex </h1>
        <SearchBox
          onchangeHandler={onSearchChange}
          placeholder="search monster"
          className="monster-search-box"
        />
        {/* <CardList monsters={filteredMonster} /> */}
      </div>
    );
}

// class App extends Component {//using class component
//   constructor() {
//     super();
//     this.state = {
//       monster: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monster: users }; //now monster points to user and have all of its properties
//           },
//           () => {
//             console.log(this.state); //callback function
//           }
//         )
//       );
//   }
//   // -------search function--------------
//   onSearch = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase(); //takes the written value from the search box
//     this.setState(() => {
//       return { searchField: searchField };
//     });
//   };
//   // ---------------------
//   render() {
//     // destructuring
//     const { monster, searchField } = this.state;
//     const { onSearch } = this;

//     const filteredMonster = monster.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//       <h1 className="app-title">Monster Rolodex </h1>
//         <SearchBox
//           onchangeHandler={onSearch}
//           placeholder="search monster"
//           className="monster-search-box"
//         />
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
//   // -----------------------
// }

export default App;
