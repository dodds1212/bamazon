import React, { Component } from "react";

import "./styles.css";

class HomePage extends Component {
  render() {
    return (
      <div className="Home-page">
        <header>
          <div>first</div>
          <div>second</div>
        </header>
        <main>
          <div className="left" />
          <div className="right" />
        </main>
        <footer>I am the FOOTER</footer>
      </div>
    );
  }
}

export default HomePage;
