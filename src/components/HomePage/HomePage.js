import React, { Component } from "react";

import axios from "axios";
import Card from "../Card/Card";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      pets: null
    };
  }
  populateCards = () => {
    return this.state.pets.map(petObject => (
      <Card {...petObject} key={petObject._id} />
    ));
  };
  componentDidMount() {
    if (!this.state.pets) {
      let url = "http://localhost:8080/pets";
      axios.get(url).then(res => {
        this.setState({ pets: res.data });
        console.log(res.data);
      });
    }
  }
  render() {
    if (this.state.pets) {
      return <div>{this.populateCards()}</div>;
    } else {
      return <div>This is our home page :)</div>;
    }
  }
}

export default HomePage;
