import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onHandleChange(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;
