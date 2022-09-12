import React, { Component } from "react";

class SearchBox extends React.Component {
  render() {
    const {onchangeHandler}=this.props
    return (
      <div>
        {/* search box */}
        <input
          className={this.props.className}
          type={this.props.placeholder}
          placeholder="search monsters"
          onChange={onchangeHandler} //using this key word because now onSearch is considered as a method to the main class
        />
      </div>
    );
  }
}
export default SearchBox;
