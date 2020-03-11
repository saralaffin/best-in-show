import React, { Component } from "react";
import "../../App.css";
import "./CatBreeds.css";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";

class CatBreeds extends Component {
  constructor() {
    super();

    this.state = {
      breeds: null
    };
  }

  //method to populate cards
  populateBreeds = () => {
    return this.state.breeds.map(breedObject => (
      <Link to="/">
        <div className="CatBreeds__breed" key={breedObject._id}>
          {breedObject.breedName}
        </div>
      </Link>
    ));
  };
  componentDidMount() {
    if (!this.state.breeds) {
      let url = "";
      if (process.env.NODE_ENV === "development") {
        url = "http://localhost:8080/cats";
      } else {
        url = "https://boiling-everglades-85077.herokuapp.com/cats";
      }
      axios.get(url).then(res => {
        this.setState({ breeds: res.data });
        console.log(res.data);
      });
    }
  }
  render() {
    if (this.state.breeds) {
      return (
        <div className="CatBreeds___container">{this.populateBreeds()}</div>
      );
    } else {
      return (
        <div>This is about cat breeds c: please wait while our cats load</div>
      );
    }
  }
}

export default CatBreeds;
