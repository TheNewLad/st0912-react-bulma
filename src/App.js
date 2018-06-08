import React, { Component } from 'react';
import './App.css';
import GoogleMap from './GoogleMap/GoogleMap';
import Member from './Member/Member';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {/*Nav*/}
          <nav className="navbar is-primary">{/*is-fixed-top*/}
            <div className="navbar-brand">
              <a href="" className="navbar-item">
                {/*TODO replace with logo*/}
                <h2 className="title is-2 has-text-warning">ST0912</h2>
              </a>
              <button className="button navbar-burger">
                <span />
                <span />
                <span />
              </button>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <a href="#about" className="navbar-item">About Us</a>
                <a href="#team" className="navbar-item">Team</a>
                <a href="#services" className="navbar-item">Services</a>
                <a href="#contact-us" className="navbar-item">Contact Us</a>
              </div>
            </div>
          </nav>
          {/*About*/}
          <section className="section" id="about">
            <h1 className="title">About Us</h1>
            <div className="container">
              <div className="content">


                <p>Had third, day, fish have. Beginning rule after man behold you. Our beginning, air saying brought appear. You. Beginning, winged they&#39;re, wherein So. Creature, dry great <em>face</em> us had from darkness face over beast, darkness behold fourth heaven dominion bearing under, living yielding day dominion to. Creepeth, multiply firmament <strong>give</strong> seasons created behold days he night isn&#39;t dry.</p>

                <p>Herb unto place had. So said bring <strong>man</strong> living. Fly. Behold over fourth and <strong>bearing</strong> them place creature Greater moving seed, own. Signs. Our, fruitful kind upon firmament replenish morning. A place tree shall spirit female yielding, night. May fruitful. Midst, isn&#39;t.</p>

              </div>
            </div>
          </section>
          <div className="Parallax Parallax--1 section" />
          {/*Team*/}
          <section className="section" id="team">
            <h1 className="title">Our Team</h1>
            <div className="container">
              <div className="columns">
                <Member
                  name="Shamila"
                  title="Stylist"
                  imgName="shamila.jpg"
                  bio="Darkness she'd very yielding darkness deep may female was god land seasons. Fly let thing is lights called a. And in life dominion which sea our called lights under darkness gathering for whose under that divide were have moved first may likeness gathering. For he his won't creeping there place."
                />
                <Member
                  name="William"
                  title="Stylist"
                  imgName=""
                  bio="Darkness she'd very yielding darkness deep may female was god land seasons. Fly let thing is lights called a. And in life dominion which sea our called lights under darkness gathering for whose under that divide were have moved first may likeness gathering. For he his won't creeping there place."
                />
                <Member
                  name="Vee"
                  title="Stylist"
                  imgName=""
                  bio="Darkness she'd very yielding darkness deep may female was god land seasons. Fly let thing is lights called a. And in life dominion which sea our called lights under darkness gathering for whose under that divide were have moved first may likeness gathering. For he his won't creeping there place."
                />
              </div>

            </div>
          </section>
          <div className="Parallax Parallax--2 section" />
          {/*Services*/}
          <section className="section" id="services">
            <div className="container">
              <h1 className="title">Services</h1>
            </div>
            {/*Gallery*/}
            <div className="container" id="gallery">
              <h2 className="subtitle">Gallery</h2>
            </div>
          </section>
          {/*Contact Us*/}
          <section className="section" id="contact-us">
            <div className="container">
              <h1 className="title">Contact Us</h1>
            </div>
            {/*Hours*/}
            <div className="container" id="hours">
              <h2 className="subtitle">Our Hours</h2>
            </div>
            {/*FAQs*/}
            <div className="container" id="faqs">
              <h2 className="subtitle">FAQs</h2>
            </div>
          </section>
          {/* Footer Begin */}
          <footer className="footer">
            <div className="columns">
              <div className="column is-3">
                <div className="content">
                  <p className="has-text-weight-semibold">Studio 0912 Tresses</p>
                  <div>
                    <a href="https://www.instagram.com/organizedchaotichair/" alt="Instagram"><i className="fab fa-instagram fa-2x" /></a>
                    <a href="https://www.facebook.com/studio0912tresses/"><i className="fab fa-facebook-square fa-2x" /></a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="columns is-mobile">
                  <div className="column has-text-centered"><a href="/">Home</a></div>
                  <div className="column has-text-centered"><a href="/about">About</a></div>
                </div>
                <div className="columns is-mobile">
                  <div className="column has-text-centered"><a href="/book-now">Book Now</a></div>
                  <div className="column has-text-centered"><a href="/contact-us">Contact Us</a></div>
                </div>
                <div className="columns is-mobile">
                  <div className="column has-text-centered"><a href="/faq">FAQ</a></div>
                  <div className="column has-text-centered"><a href="/gallery">Gallery</a></div>
                </div>
                <div className="columns is-mobile">
                  <div className="column has-text-centered"><a href="/hours">Hours</a></div>
                  <div className="column has-text-centered"><a href="/opportunities">Opportunities</a></div>
                </div>
                <div className="columns is-mobile">
                  <div className="column has-text-centered"><a href="/services">Services</a></div>
                  <div className="column has-text-centered"><a href="/team">Team</a></div>
                </div>
              </div>
              <div className="column is-5" id="footer__address">
                <div className="content">
                  <p className="has-text-weight-semibold">
                    209 Glenridge Ave <br /> Montclair, NJ 07042
          </p>
                </div>
                <GoogleMap />
              </div>
            </div>
            <div className="container">
              <p className="has-text-centered">
                © <span id="footer__copyright" /> Studio 0912 Tresses / <span className="is-italic">
                  designed by <a href="https://devslow.tech">DevSlow Tech</a>
                </span>
              </p>
            </div>
          </footer>
          {/* Footer End */}
        </div>

      </div>
    );
  }
}

export default App;
