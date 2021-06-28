import React, { Component } from "react";

class Buttons extends Component {
  state = {
    value: this.props.value,

    styleOfButton: {
      height: 100,
      width: 150,
      margin: 50,
      backgroundColor: "#deaaff",
      color: "#fff",
      textAlign: "center",
      borderColor: "#fff",
      borderRadius: 16,
    },
  };

  changeBackgroundColor = (x) => {
    var style = { ...this.state.styleOfButton };
    if (x === 1) style.backgroundColor = "#d8bbff";
    else style.backgroundColor = "#deaaff";

    this.setState({
      styleOfButton: style,
    });
  };

  render() {
    return (
      <React.Fragment>
        <button
          style={this.state.styleOfButton}
          onMouseOver={() => {
            this.changeBackgroundColor(1);
          }}
          onMouseOut={() => {
            this.changeBackgroundColor(0);
          }}
          onClick={()=>this.props.onClick(this.props.value)}
        >
          {this.state.value}
        </button>
      </React.Fragment>
    );
  }
}

export default Buttons;
