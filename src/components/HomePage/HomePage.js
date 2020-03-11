import React, { Component } from "react";
import "../../App.css";
import "./HomePage.css";
import axios from "axios";
import Card from "../Card/Card";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      pets: null
    };
  }

  //method to populate cards
  populateCards = () => {
    return this.state.pets.map(petObject => (
      <Card className="card" {...petObject} key={petObject._id} />
    ));
  };
  componentDidMount() {
    if (!this.state.pets) {
      let url = "";
      if (process.env.NODE_ENV === "development") {
        url = "http://localhost:8080/pets";
      } else {
        url = "https://boiling-everglades-85077.herokuapp.com/pets";
      }

      axios.get(url).then(res => {
        this.setState({ pets: res.data });
      });
    }
  }
  render() {
    if (this.state.pets) {
      return <div className="homepage__container">{this.populateCards()}</div>;
    } else {
      return (
        <div>This is our home page :) please wait while our pets load</div>
      );
    }
  }
}

export default HomePage;
