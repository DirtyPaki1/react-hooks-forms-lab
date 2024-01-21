import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "Produce"
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, category } = this.state;
    const newItem = {
      id: uuid(),
      name: name,
      category: category
    };
    this.props.onItemFormSubmit(newItem);
    this.setState({ name: "", category: "Produce" });
  };

  render() {
    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Category:
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleInputChange}
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </label>
        <button type="submit">Add to List</button>
      </form>
    );
  }
}

export default ItemForm;