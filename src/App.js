import React, { Component } from 'react';
import './App.css';
import Section from './Section/Section';
import { Parallax } from 'react-parallax';
import GoogleMap from './GoogleMap/GoogleMap';
import Member from './Member/Member';
import Hours from './Hours/Hours';
import { Logos, Logo } from './Logos/Logos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Reviews from './Reviews/Reviews';

class App extends Component {

  constructor(props) {
    super(props);
    const picSize = () => {
      if (window.innerWidth <= 640) {
        return 'sm';
      } else if (window.innerWidth <= 1280) {
        return 'md';
      } else {
        return 'lg';
      }
    }
    this.state = { pictureSize: picSize() }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    AOS.init();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const width = window.innerWidth;
    if (width <= 640) {
      this.setState({ pictureSize: 'sm' });
    } else if (width <= 1280) {
      this.setState({ pictureSize: 'md' });
    } else {
      this.setState({ pictureSize: 'lg' });
    }
  }



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
                <div className="navbar-item">
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
          {/*About*/}
          <Section
            sectionId="about"
            sectionTitle="About Us"
          >
            <div className="content">
              <p>Had third, day, fish have. Beginning rule after man behold you. Our beginning, air saying brought appear. You. Beginning, winged they&#39;re, wherein So. Creature, dry great <em>face</em> us had from darkness face over beast, darkness behold fourth heaven dominion bearing under, living yielding day dominion to. Creepeth, multiply firmament <strong>give</strong> seasons created behold days he night isn&#39;t dry.</p>

              <p>Herb unto place had. So said bring <strong>man</strong> living. Fly. Behold over fourth and <strong>bearing</strong> them place creature Greater moving seed, own. Signs. Our, fruitful kind upon firmament replenish morning. A place tree shall spirit female yielding, night. May fruitful. Midst, isn&#39;t.</p>
            </div>
          </Section>
          <Parallax
            blur={0}
            bgImage={require(`./Parallax/images/794064-${this.state.pictureSize}.jpeg`)}
            className="parallax"
          />
          {/*Team*/}
          <Section
            sectionId="team"
            sectionTitle="Our Team"
          >
            <div className="columns">
              <Member
                name="Shamila"
                title="Stylist"
                imgName="shamila.jpg"
                bioGist={`Shamila McEachin, affectiontely known as "Sha", is a native of Newark, New Jersey and has been a professional hair stylist for over 7 years`}
              >
                <p>
                  Shamila McEachin, affectiontely known as "Sha", is a native of Newark, New Jersey and has been a professional hair stylist for over 7 years. Shamila began her career at the age of 24 while working in a neighborhood salon, where she received hands on training and learned the basics of shampooing, styling, and proper hair treatment. Shamila quickly develped a passion for hair design, and decided to pursue professional training at Concord Beauty School in Bloomfield, New Jersey. Focusing on continued education, which is a must in hair industry, Shamila was also recently trained at the famous L 'oreal Academy, Devachan in New York, also Vidal Sassoon Academy, Los Angeles, CA and New York.
                  </p>
                <p>
                  Shamila is an artist in every sense of the word, with true artistic vision and an impeccable attention to detail. Shamila specializes in precision cutting and total hair care, with an emphasis on creating wide- ranging hair styles, coloring, and extensions to match her clients needs and personalities. You will often hear Shamila counseling her clients on proper hair care. She also enjoys styling her customers for weddings and other special occasions.
                  </p>
                <p>
                  Shamila opened her own salon, Studio 0912 Tresses, in Montclair, New Jersey in March, 2013. She has a loyal following and works consistently to deliver high-quality services to her expanding clientele.
                  </p>
                <p>
                  So, if you're looking for that "one of a kind" haircut, or have been searching for a stylist who can bring out your inner beauty and personality through a unique hair style, you need to be sitting in Shamila's chair!
                  </p>
              </Member>
              <Member
                name="William"
                title="Stylist"
                imgName="william.jpg"
                bioGist={`Willam is an accomplished hairstylist and makeup artist with twelve years of experience in media makeup, fashion, video and print. At an early age, being attracted to art, william enrolled at the Concord School of Hair Design`}
              >
                <p>
                  William is an accomplished hairstylist and makeup artist with twelve years af experience in media makeup: fashion, video and print. At an early age, being attracted to art, William enrolled at the Concord School of Hair Design. Additional training includes: Goldwell Mid-Atlantic, Redken, Mizani USA and MAC Cosmetics. He interned under New York City photographers, where he began his career began with test shooting for modeling agencies IMAGES and MC<sup>2</sup>, which lead to work with Sean John, "W" magazine, Sista to Sista magazine, Smooth Magazine, and reality television for VH1's "Love and Hip Hop" where he has been the key artist since its inception. In addition to being a licensed celebrity stylist for ten years, he also teaches a class in theatrical beauty to the students of the Dance department for Brooklyn's Long Island University and lectures a class in industry development and beauty for the Fashion Institute of Technology. William is sought for his creativity and professionalism. Past employers were very happy with his performance and he is viewed as being detail-oriented and self motivated. William brings a wealth of experiences, training and skill that will benefit any projoct. References will be furnished upon request.
                  </p>
              </Member>
              <Member
                name="Virjasha"
                title="Stylist"
                imgName="virjasha.jpg"
                bioGist={`I am Virjasha Caldwell and I love to do hair. As a child you could find me styling anyone from my baby dolls to my sisters and friends`}
              >
                <p>
                  I am Virjasha Caldwell and I love to do hair. As a child you could find me styling anyone from my baby dolls to my sisters and friends. Today, you could find me styling and caring for hair in the salon. So as of now being in a hair salon brings out my talent more, as an upcoming stylist. Being inspired by my parents being a hairstylist and barber has given me the vision of being like them or better, owning my own business, having a large clientele, and doing phenomenal work. I love to express my artistry and talent through hair.
                  </p>
              </Member>
            </div>
          </Section>
          <Parallax
            blur={0}
            bgImage={require(`./Parallax/images/1006202-${this.state.pictureSize}.jpeg`)}
            className="parallax"
          />
          {/*Services*/}
          <Section
            sectionId="services"
            sectionTitle="Services"
          >

          </Section>
          {/*Contact Us*/}
          <Section
            sectionId="contact-us"
            sectionTitle="Contact Us"
          >
            <div className="columns">
              <Hours />
            </div>
          </Section>
          {/* Testimonies */}
          <Section
            sectionId="testimonies"
            sectionTitle="Testimonies"
          >
            <Reviews />
          </Section>
          <Section
            sectionTitle="Products We Use"
          >
            <Logos>
              <Logo
                logoName="avlon.svg"
                productLink="https://www.avlon.com/products/"
              />
              <Logo
                logoName="deva-curl.svg"
                productLink="https://www.devacurl.com/products.html"
              />
              <Logo
                logoName="goldwell-pro.svg"
                productLink="https://www.goldwell.us/products/"
              />
              <Logo
                logoName="jane-carter.svg"
                productLink="https://janecartersolution.com/collections/all-products"
              />
              <Logo
                logoName="loreal-pro.svg"
                productLink="http://us.lorealprofessionnel.com/hair-care"
              />
              <Logo
                logoName="milk-shake.svg"
                productLink="https://z-oneconceptusa.com/product-category/milk_shake/"
              />
              <Logo
                logoName="mizani.svg"
                productLink="http://www.mizani.com/products/category/haircare"
              />
              <Logo
                logoName="vs-sasson.svg"
                productLink="https://www.vssassoon.com.au/women"
              />
              <Logo
                logoName="wella-pro.svg"
                productLink="http://www.wella.com/professional/en-US/products/care/care-landing-page"
              />
            </Logos>
          </Section>
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
