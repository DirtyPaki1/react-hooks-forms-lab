import React, { Component } from "react";


class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  render() {
    return (
      <div className="Filter">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={this.state.searchText}
          onChange={this.handleSearchChange}
        />
        <select name="filter" onChange={this.props.onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    );
  }

  handleSearchChange = (event) => {
    this.setState({ searchText: event.target.value });
  };
}
export default Filter;