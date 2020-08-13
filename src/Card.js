import React, { useState } from 'react';
import './card.css';


class Card extends React.Component {
  clickHandler = () => {
    this.props.clickFunction({
      name: this.props.heading,
      description: this.props.text,
      image: this.props.backgroundImage
    });
  };

  render() {
    return (
      <div
        className="card"
        onClick={this.clickHandler}
      >
        <div className="preview"
        style={{
          backgroundImage: this.props.backgroundImage
        }}>
        </div>
        <h4 className="cardHeading">{this.props.heading}</h4>
        <div className="cardText">{this.props.text}</div>
      </div>
    )
  }
}

export default Card;
