import React, { Component } from "react";
import "../../App.css";
import "./DogBreeds.css";
import axios from "axios";

class DogBreeds extends Component {
  constructor() {
    super();

    this.state = {
      breeds: null
    };
  }

  //method to populate cards
  populateBreeds = () => {
    return this.state.breeds.map(breedObject => (
      <div className="DogBreeds__breed" key={breedObject._id}>
        {breedObject.breedName}
      </div>
    ));
  };
  componentDidMount() {
    if (!this.state.breeds) {
      let url = "";
      if (process.env.NODE_ENV === "development") {
        url = "http://localhost:8080/dogs";
      } else {
        url = "https://boiling-everglades-85077.herokuapp.com/dogs";
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
        <div className="DogBreeds___container">{this.populateBreeds()}</div>
      );
    } else {
      return (
        <div>This is about dog breeds c: please wait while our dogs load</div>
      );
    }
  }
}

export default DogBreeds;
