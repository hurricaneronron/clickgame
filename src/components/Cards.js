import React, { Component } from 'react';
import './Cards.css'
import linda from './images/linda.jpg';
import bob from './images/bob.jpg';
import louise from './images/louise.jpg';
import andyollie from './images/andyollie.jpg'

class Cards extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s3">
            <div className="card-small z-depth-5">
              <div className="card-image">
                <img src={linda} alt="Linda" style={{height: '180px', width: '180px'}} />
              </div>
            </div>
          </div>
          <div className="col s3">
            <div className="card-small z-depth-5">
              <div className="card-image">
                <img src={bob} alt="Bob" style={{height: '180px', width: '180px'}} />
              </div>
            </div>
          </div>
          <div className="col s3">
            <div className="card-small z-depth-5">
              <div className="card-image">
                <img src={louise} alt="Louise" style={{height: '180px', width: '180px'}} />
              </div>
            </div>
          </div>
          <div className="col s3">
            <div className="card-small z-depth-5">
              <div className="card-image">
                <img src={andyollie} alt="Andy and Ollie" style={{height: '180px', width: '180px'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;