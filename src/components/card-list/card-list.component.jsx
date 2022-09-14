import React, { component } from "react";
import './card-list.style.css';
import Card from '../cards/card.component';

class CardList extends React.Component {
  render() {
    const { monsters } = this.props; //destructing from the props i passed in APP

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardList;
