import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import DogBreeds from "./components/DogBreeds/DogBreeds";
import CatBreeds from "./components/CatBreeds/CatBreeds";
import AddPet from "./components/AddPet/AddPet";

class App extends Component {
  //code below copied from national parks lab
  // constructor() {
  //   super();

  //   this.state = {
  //     parks: null
  //   };
  // }
  // componentDidMount() {
  // if (!this.state.parks) {
  //   let url =
  //     "https://developer.nps.gov/api/v1/parks?limit=50&fields=images,addresses&api_key=KDAvx939Yj9FsDsKrBSHeZi7BMzZHUqpQdLU5tfV";

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({ parks: res.data });
  //     });
  // }
  // }
  render() {
    return (
      <div>
        <header>
          <Link to="/">Posts</Link>
          <Link to="/dogs">Dog Breeds</Link>
          <Link to="/cats">Cat Breeds</Link>
          <Link to="/addPet">Add a Pet</Link>
        </header>
        <main>
          <Route
            path="/"
            exact
            render={routerProps => <HomePage {...routerProps} />}
          />
          <Route
            path="/dogs"
            exact
            render={routerProps => <DogBreeds {...routerProps} />}
          />
          <Route
            path="/cats"
            exact
            render={routerProps => <CatBreeds {...routerProps} />}
          />
          <Route
            path="/addPet"
            exact
            render={routerProps => <AddPet {...routerProps} />}
          />
        </main>
      </div>
    );
  }
}

export default App;
