import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
