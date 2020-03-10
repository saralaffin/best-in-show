import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

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
          <Link to="/newpet">Add a Pet</Link>
        </header>
        <main>
          <Route
            path="/"
            exact
            component={routerProps => <div>This is the home page!</div>}
          />
        </main>
      </div>
    );
  }
}

export default App;
