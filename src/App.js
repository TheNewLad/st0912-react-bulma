import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-primary is-medium">
          {/* Hero head: will stick at the top */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                  </a>
                  <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">
                      About Us
            </a>
                    <a className="navbar-item">
                      Services
            </a>
                    <a className="navbar-item">
                      Reviews
            </a>
                    <a className="navbar-item">
                      Contact Us
            </a>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fab fa-github" />
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Hero content: will be in the middle */}
          <div className="hero-body" />
          {/* Hero footer: will stick at the bottom */}
          <div className="hero-foot" />
        </section>
        
      </div>
    );
  }
}

export default App;
