import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        My name is {this.props.petName}. My caption is {this.props.caption}
      </div>
    );
  }
}

export default Card;
