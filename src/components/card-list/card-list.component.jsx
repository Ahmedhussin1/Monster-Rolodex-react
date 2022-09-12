import React, { component } from "react";

class CardList extends React.Component {
  render() {
    const {monsters} = this.props; //destructing from the props i passed in APP
    return (  
      <div>
        {/* rendering the monster name and on the page */}
        {monsters.map((monster) => {
          return (
            <div>
              <h1 key={monster.id}> {monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
