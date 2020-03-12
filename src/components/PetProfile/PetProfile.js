import React, { Link, Component } from "react";
import PropTypes from "prop-types";
import getAPI from "../../util/util";
import "./PetProfile.css";
import axios from "axios";
import Card from "../Card/Card";
import HomePage from "../HomePage/HomePage";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

let petUrl = `${getAPI()}pet/`;

class PetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petDetails: {},
      deleted: false
    };
    console.log(props);
  }
  deleteClickHandle = () => {
    axios.delete(`${petUrl}${this.props.match.params.id}`);
    this.setState({
      deleted: true
    });
  };
  componentDidMount() {
    if (!this.state.pets) {
      let url = `${petUrl}${this.props.match.params.id}`;
      axios.get(url).then(res => {
        this.setState({ petDetails: res.data });
      });
    }
  }

  render() {
    if (this.state.petDetails && !this.state.deleted) {
      return (
        <div>
          <div className="pet__container">
            <div
              className="pet__container-image"
              style={{ backgroundImage: `url(${this.state.petDetails.image})` }}
            ></div>
            <div className="pet__container-caption">
              <span className="pet__container-username">
                @{this.state.petDetails.petName}:
              </span>{" "}
              {this.state.petDetails.caption}
            </div>
            <div className="pet__container-more-stats">
              <p className="pet__container-breed">
                <span>Breed: </span>
                {this.state.petDetails.breed}
              </p>
              <p className="pet__container-age">
                <span>Age: </span>
                {this.state.petDetails.age}
              </p>
            </div>
            <div className="pet__container-links">
              <div>
                <span>{this.state.petDetails.numberOfLikes} Likes</span>
              </div>
              <div onClick={this.deleteClickHandle}>
                <DeleteForeverIcon />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Can't find this pet anymore :(</div>;
    }
  }
}

export default PetProfile;
