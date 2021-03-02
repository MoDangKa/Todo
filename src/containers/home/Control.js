import React, { Component } from "react";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBox: "",
      style: "",
      placeholder: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    if (this.state.inputBox === e.target.value) return;
    this.setState({ [e.target.id]: e.target.value });
  }

  handleClick() {
    if (!this.state.inputBox) {
      this.setState({
        style: "is-invalid",
        placeholder: "Need a message",
      });
      return;
    }

    this.props.onAdd(this.state.inputBox);

    this.setState({
      inputBox: "",
      style: "",
      placeholder: "",
    });
  }

  render() {
    const { inputBox, style, placeholder } = this.state;
    return (
      <div>
        <div className="input-group is-invalid">
          <div className="custom-file">
            <input
              id="inputBox"
              type="text"
              className={"form-control " + style}
              value={inputBox}
              onChange={this.handleChange}
              placeholder={placeholder}
            />
          </div>
          <div className="input-group-append">
            <button
              className="btn btn-success"
              type="button"
              onClick={this.handleClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
