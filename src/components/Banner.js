import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card-panel pink accent-1">
            <h3 className="center">Click an image to begin! / You guessed _____ !</h3>
            <h5 className="center">Click on an image to earn points, but don't click on any more than once!</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;