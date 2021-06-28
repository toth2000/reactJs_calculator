import React, { Component } from "react";
class OperatorButton extends Component {
  state = { val: this.props.value,
    styleOfButton: {
            height: 150,
            width: 80,
            margin: 50,
            borderColor: "#52b69a",
            background: "#fff",
            fontSize: 45,
            color: "#99d98c",
      }
};


  changeBackgroundColor = (x) => {
    var style = { ...this.state.styleOfButton };
    if (x === 1) style.backgroundColor = "#52b69a";
    else style.backgroundColor = "#fff";

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
          {this.state.val}
        </button>
      </React.Fragment>
    );
  }
}

export default OperatorButton;
