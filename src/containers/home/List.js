import React, { Component } from "react";

class List extends Component {
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

  componentDidMount() {
    this.setState({ inputBox: this.props.list.text });
  }

  handleChange(e) {
    if (this.state.inputBox === e.target.value) return;
    this.setState({ inputBox: e.target.value });
  }

  handleClick() {
    let list = this.props.list;
    let oText = list.text;
    let inputBox = this.state.inputBox;

    if (inputBox === oText) return;

    if (!inputBox) {
      this.setState({
        style: "border-danger",
        placeholder: "Need a message",
      });
      return;
    }

    let newList = {
      createDate: list.createDate,
      text: inputBox,
      oText: list.text,
    };

    this.props.onUpdate(newList);

    this.setState({
      style: "",
      placeholder: "",
    });
  }

  render() {
    const { inputBox, style, placeholder } = this.state;
    const { list, onDel } = this.props;
    return (
      <div className="container">
        <div className={"list p-1 mb-1 rounded border " + style}>
          <div className="row justify-content-between align-items-center">
            <div className="pl-3 col">
              <input
                className="border-0 w-100"
                type="text"
                value={inputBox}
                onChange={this.handleChange}
                placeholder={placeholder}
              />
            </div>
            <div className="pr-3">
              <span className="text-muted">
                <small>{list.createDate.toLocaleString() + " | "}</small>
              </span>
              <button
                className="btn btn-info btn-sm mr-1"
                onClick={this.handleClick}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDel(list)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
