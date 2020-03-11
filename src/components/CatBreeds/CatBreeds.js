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
      breeds: null,
      selectedBreed: null
    };
  }
  clickHandle = e => {
    console.log(this.state.breeds);
    let catObject = this.state.breeds.filter(el => {
      if (el.breedName === e.target.innerText) {
        return <div className="test">HELLO</div>;
      }
    });
    this.setState({ selectedBreed: catObject.breedName });
    console.log(catObject);
  };

  //method to populate cards
  populateBreeds = () => {
    return this.state.breeds.map(breedObject => (
      <div
        className="CatBreeds__breed"
        key={breedObject._id}
        onClick={this.clickHandle}
      >
        {breedObject.breedName}
      </div>
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
        <div>
          <div className="CatBreeds___container">{this.populateBreeds()}</div>
          <div className="hello">{this.state.selectedBreed}</div>
        </div>
      );
    } else {
      return <div>Loading!</div>;
    }
  }
}

export default CatBreeds;
