import React, { Component } from 'react';

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState(prevState => (
      { open: !prevState.open }
    ))
  }

  render() {
    return (
      <nav className="navbar is-hidden-desktop is-primary">{/*is-fixed-top*/}
        <div className="navbar-brand navbar-brand--mobile">
          <img src={require('../Logos/images/st0912-logo.svg')} alt="" className="navbar-item salon-logo" width="200" />
        </div>
        <button className={`button navbar-burger navbar-burger--custom ${this.state.open ? 'is-active' : ''}`} onClick={this.toggleNav}>
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar-menu ${this.state.open ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a href="#about" className="navbar-item has-text-centered">About Us</a>
            <a href="#team" className="navbar-item has-text-centered">Team</a>
            <a href="#services" className="navbar-item has-text-centered">Services</a>
            <a href="#contact-us" className="navbar-item has-text-centered">Contact Us</a>
            <div className="is-divider" data-content="Follow Us" />
            <div className="navbar-item has-text-centered">
              <a href="https://www.facebook.com/studio0912tresses/" className="icon">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/organizedchaotichair" className="icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="icon">
                <i className="fab fa-youtube-square"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default MobileNav;