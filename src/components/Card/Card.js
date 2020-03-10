import React, { Component } from "react";

class Card extends Component {
  render() {
    return <div>My name is {this.props.petName}</div>;
  }
}

export default Card;
