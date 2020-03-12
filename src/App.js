import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import DogBreeds from "./components/DogBreeds/DogBreeds";
import CatBreeds from "./components/CatBreeds/CatBreeds";
import AddPet from "./components/AddPet/AddPet";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PetProfile from "./components/PetProfile/PetProfile";

<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      <header className="App-header">hello world!</header>
      <div>Zack Friendly</div>
<<<<<<< HEAD
=======

      <h1>Sarah</h1>

>>>>>>> 8c19fabcc62d0b31678078995b5861aace3404ac
      <p>Norman</p>
      <div>Sara</div>
    </div>
  );
=======
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main__container">
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
            <Route
            path="/pet/:id"
            exact
            render={routerProps => <PetProfile {...routerProps} />}
          />
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
>>>>>>> ed35783b42d74dfe2fac5b532471d46f7e9407b9
}

export default App;
