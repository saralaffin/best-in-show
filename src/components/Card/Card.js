import React, { Component } from "react";
import "../../App.css";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="card__feed">
          <div className="card__container">
            <div
              className="card__container-image"
              style={{ backgroundImage: `url(${this.props.image})` }}
            ></div>
            <div className="card__container-caption">
              <span className="card__container-username">
                @{this.props.petName}:
              </span>{" "}
              {this.props.caption}
            </div>
            <div className="card__container-links">
              <div>
                <img
                  className="card__container-like"
                  src="https://i.imgur.com/I3Ef8to.png"
                ></img>
                <span>{this.props.numberOfLikes} Likes</span>
              </div>
              <div className="card__container-more">See More Info</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
