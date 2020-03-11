import React, { Component } from "react";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import Dropdown from "../Form/Dropdown/Dropdown";
import Button from "../Button/Button";
import getAPI from "../../util/util";
import axios from "axios";

class AddPet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catBreeds: [0, 1, 2],
      dogBreeds: [0, 1, 2],
      type: "",
      petName: "",
      age: 0,
      breed: "",
      image: "",
      caption: "",
      numberOfLikes: 0
    };
  }
  inputComponenets = [
    <Input label="Name" type="small" placeholder="Name" />,
    <Input
      label="Caption"
      type="small"
      placeholder="Be creative! And pawsitive!"
    />,
    <Input
      label="Image URLCats"
      type="small"
      placeholder="Checkout imgur.com for hosting image files"
    />
  ];
  dropdownComponents = () => {
    return [
      <Dropdown label="Type" options={["cat", "dog"]} type="gray" />,
      <Dropdown
        label="Breed"
        options={[...this.state.catBreeds, ...this.state.dogBreeds]}
        type="gray"
      />,
      <Dropdown
        label="Age"
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "15+"]}
        type="gray"
      />
    ];
  };
  buttonComponent = (<Button label="Submit" type="default" />);
  componentDidMount() {
    if (!this.state.breeds) {
      let urlCats = `${getAPI()}cats/`;
      axios.get(urlCats).then(breedObj => {
        let breedNames = breedObj.data.map(breedObj => breedObj.breedName);
        this.setState({ catBreeds: breedNames });
      });
      let urlDogs = `${getAPI()}dogs/`;
      axios.get(urlDogs).then(breedObj => {
        let breedNames = breedObj.data.map(breedObj => breedObj.breedName);
        this.setState({ dogBreeds: breedNames });
      });
    }
  }
  render() {
    return (
      <div>
        This page lets you add pets!
        <Form
          inputComponenets={this.inputComponenets}
          dropdownComponents={this.dropdownComponents()}
          buttonComponent={this.buttonComponent}
        />
      </div>
    );
  }
}

export default AddPet;
