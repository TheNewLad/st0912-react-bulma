import React, { Component } from 'react';
import './App.css';
import Section from './Section/Section';
import GoogleMap from './GoogleMap/GoogleMap';
import Member from './Member/Member';
import Hours from './Hours/Hours';
import { Logos, Logo } from './Logos/Logos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Reviews from './Reviews/Reviews';
import { Services, Service } from './Services/Services';
import MobileNav from './MobileNav/MobileNav';

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
  }

  componentDidMount() {
    AOS.init();
  }



  render() {
    return (
      <div className="App">
        <div>
          {/*Nav*/}
          <nav className="level navbar is-primary is-hidden-touch navbar--custom">
            <p className="level-item has-text-centered">
              <a className="has-text-white" href="#about">About Us</a>
            </p>
            <p className="level-item has-text-centered">
              <a className="has-text-white" href="#team">Team</a>
            </p>
            <p className="level-item has-text-centered">
              <a className="has-text-white" href="#services">Services</a>
            </p>
            <p className="level-item has-text-centered">
              <img
                src={require('./Logos/images/st0912-logo.svg')}
                alt=""
                className="salon-logo"
              />
            </p>
            <p className="level-item has-text-centered">
              <a className="has-text-white" href="#contact-us">Contact Us</a>
            </p>
            <p className="level-item has-text-centered">
              <a className="has-text-white" href="#products">Products We Use</a>
            </p>
            <div className="level-item">
              <a href="https://www.facebook.com/studio0912tresses/" className="icon is-medium has-text-white">
                <i className="fab fa-lg fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/organizedchaotichair" className="icon is-medium has-text-white">
                <i className="fab fa-lg fa-instagram"></i>
              </a>
              <a className="icon is-medium has-text-white">
                <i className="fab fa-lg fa-youtube-square"></i>
              </a>
            </div>
          </nav>
          <MobileNav />
          {/*About*/}
          <Section
            sectionId="about"
            sectionTitle="About Us"
          >
            <div className="content">
              <p>There is nothing more satisfying than a fabulous hairdo. At Studio 0912 Tresses we do high quality full hair care from natural or highly textured hair, always with finest products for your hair in mind. Our professional staff are expert hairstylist, colorist, and customer satisfaction is our optimum goal. You are unique in everything you do, Studio 0912 Tresses can bring out your shine, enhance your look, all with love!</p>
            </div>
          </Section>
          <div className="is-divider is-divider--custom" />
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
              >
                <p>
                  William is an accomplished hairstylist and makeup artist with twelve years af experience in media makeup: fashion, video and print. At an early age, being attracted to art, William enrolled at the Concord School of Hair Design. Additional training includes: Goldwell Mid-Atlantic, Redken, Mizani USA and MAC Cosmetics. He interned under New York City photographers, where he began his career began with test shooting for modeling agencies IMAGES and MC<sup>2</sup>, which lead to work with Sean John, "W" magazine, Sista to Sista magazine, Smooth Magazine, and reality television for VH1's "Love and Hip Hop" where he has been the key artist since its inception. In addition to being a licensed celebrity stylist for ten years, he also teaches a class in theatrical beauty to the students of the Dance department for Brooklyn's Long Island University and lectures a class in industry development and beauty for the Fashion Institute of Technology. William is sought for his creativity and professionalism. Past employers were very happy with his performance and he is viewed as being detail-oriented and self motivated. William brings a wealth of experiences, training and skill that will benefit any projoct. References will be furnished upon request.
                  </p>
              </Member>
              <Member
                name="Virjasha"
                title="Hairstylist Assistant"
                imgName="virjasha.jpg"
              >
                <p>
                  I am Virjasha Caldwell and I love to do hair. As a child you could find me styling anyone from my baby dolls to my sisters and friends. Today, you could find me styling and caring for hair in the salon. So as of now being in a hair salon brings out my talent more, as an upcoming stylist. Being inspired by my parents being a hairstylist and barber has given me the vision of being like them or better, owning my own business, having a large clientele, and doing phenomenal work. I love to express my artistry and talent through hair.
                  </p>
              </Member>
            </div>
          </Section>
          <div className="is-divider is-divider--custom" />
          {/*Services*/}
          <Section
            sectionId="services"
            sectionTitle="Services"
            sectionSubtitle={<p>Consultation is <span className="has-text-weight-bold">FREE</span></p>}
          >
            <div className="columns">
              <div className="column">
                <h2 className="has-text-weight-semibold has-text-centered service-type">Chemical</h2>
                <Services subtitle="relaxer">
                  <Service
                    title="virgin"
                    price="75"
                  >Description Goes Here</Service>
                  <Service
                    title="touch up"
                    price="40"
                  ></Service>
                </Services>
                <Services subtitle="treatment">
                  <Service
                    title="intense moisture"
                    price="15"
                  ></Service>
                  <Service
                    title="scalp"
                    price="22"
                  ></Service>
                  <Service
                    title="reconstructor"
                    price="22"
                  ></Service>
                  <Service
                    title="steam"
                    price="22"
                  ></Service>
                  <Service
                    title="olaplex"
                    price="15"
                  ></Service>
                </Services>
              </div>
              <div className="column">
                <h2 className="has-text-weight-semibold has-text-centered service-type">Haircolor</h2>
                <Services subtitle="permanent">
                  <Service
                    title="virgin"
                    price="75 up"
                  ></Service>
                  <Service
                    title="touch up"
                    price="55 up"
                  ></Service>
                </Services>
                <Services>
                  <Service
                    title="demi color"
                    price="35"
                  ></Service>
                  <Service
                    title="lighten"
                    price="55 up"
                  ></Service>
                  <Service
                    title="glaze/gloss"
                    price="35"
                  ></Service>
                <Service
                  title="ombre"
                  price="90"
                ></Service>
                <Service
                  title="balayage"
                  price="110"
                ></Service>
                <Service
                  title="color correction"
                  price="upon consultation"
                ></Service>
                <Service
                  title="single process"
                  price="upon consultation"
                ></Service>
                <Service
                  title="double process"
                  price="upon consultation"
                ></Service>
                </Services>
                <Services subtitle="hi light / lo light">
                  <Service
                    title="full"
                    price="90"
                  ></Service>
                  <Service
                    title="half"
                    price="55"
                  ></Service>
                  <Service
                    title="spot"
                    price="35"
                  ></Service>
                </Services>
              </div>
              <div className="column">
                <h2 className="has-text-weight-semibold has-text-centered service-type">Styling</h2>
                <Services>
                  <Service
                    title="haircut"
                    price="70"
                  ></Service>
                  <Service
                    title="blowout"
                    price="50"
                  ></Service>
                  <Service
                    title="wrap"
                    price="50"
                  ></Service>
                  <Service
                    title="up do"
                    price="65 up"
                  ></Service>
                  <Service
                    title="wedding package"
                    price="upon consultation"
                  ></Service>
                </Services>
              </div>
              <div className="column">
                <h2 className="has-text-weight-semibold has-text-centered service-type">Extensions</h2>
                <Services>
                  <Service
                    title="micro linking"
                    price="upon consultation"
                  ></Service>
                  <Service
                    title="fusion"
                  ></Service>
                  <Service
                    title="tape ins"
                  ></Service>
                  <Service
                    title="braidless microweave"
                  ></Service>
                  <Service
                    title="traditional weaving"
                    price="250"
                  ></Service>
                  <Service
                    title="minimum leave out"
                    price="200"
                  ></Service>
                  <Service
                    title="blend"
                    price="170"
                  ></Service>
                  <Service
                    title="quick weave"
                    price="85 up"
                  ></Service>
                  <Service
                    title="per track"
                    price="30"
                  ></Service>
                  <Service
                    title={
                      <span>
                        frontal weaving<br />
                        13x4<br />
                        13x6<br />
                        13x2
                      </span>
                    }
                    price="250"
                  ></Service>
                  <Service
                    title={
                      <span>
                        lace closure weaving<br />
                        4x4<br />
                        5x5
                      </span>
                    }
                    price="200"
                  ></Service>
                  <Service
                    title="360 frontal weaving"
                    price="250"
                  ></Service>
                </Services>
              </div>
              <div className="column">
                <h2 className="has-text-weight-semibold has-text-centered service-type">Natural Hair Community</h2>
                <Services>
                  <Service
                    title="big chop"
                    price="55 up"
                  ></Service>
                  <Service
                    title="blowout"
                    price="50 up"
                  ></Service>
                  <Service
                    title="rod set"
                    price="65 up"
                  ></Service>
                  <Service
                    title="flexi rodset"
                    price="65 up"
                  ></Service>
                  <Service
                    title="two strand flat twist"
                    price="65 up"
                  ></Service>
                  <Service
                    title="two strand twist"
                    price="45 up"
                  ></Service>
                </Services>
              </div>
            </div>
          </Section>
          <div className="is-divider is-divider--custom" />
          {/*Contact Us*/}
          <Section
            sectionId="contact-us"
            sectionTitle="Contact Us"
          >
            <div className="columns">
              <Hours />
            </div>
          </Section>
          <div className="is-divider is-divider--custom" />
          {/* Testimonies */}
          <Section
            sectionId="testimonies"
            sectionTitle="Testimonies"
          >
            <Reviews />
          </Section>
          <div className="is-divider is-divider--custom" />
          {/* Products */}
          <Section
            sectionId="products"
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
                logoName="milk-shake.svg"
                productLink="https://z-oneconceptusa.com/product-category/milk_shake/"
              />
              <Logo
                logoName="mizani.svg"
                productLink="http://www.mizani.com/products/category/haircare"
              />
              <Logo
                logoName="wella-pro.svg"
                productLink="http://www.wella.com/professional/en-US/products/care/care-landing-page"
              />
            </Logos>
          </Section>
          <div className="is-divider is-divider--custom" />
          {/* Footer Begin */}
          <footer className="footer">
            <div className="columns">
              <div className="column is-3">
                <div className="content">
                  <p className="has-text-weight-semibold has-text-centered-mobile">Follow Us on Social Media</p>
                  <div className="navbar-item has-text-centered">
                    <a href="https://www.facebook.com/studio0912tresses/" className="icon is-large">
                      <i className="fab fa-2x fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/organizedchaotichair" className="icon is-large">
                      <i className="fab fa-2x fa-instagram"></i>
                    </a>
                    <a className="icon is-large">
                      <i className="fab fa-2x fa-youtube-square"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="columns is-mobile">
                  <div className="column has-text-centered"><a href="/">Home</a></div>
                  <div className="column has-text-centered"><a href="#about">About</a></div>
                </div>
                <div className="columns is-mobile">
                  <div className="column has-text-centered"><a href="#contact-us">Contact Us</a></div>
                  <div className="column has-text-centered"><a href="#services">Services</a></div>
                </div>
                <div className="columns is-mobile">
                  <div className="column has-text-centered"><a href="#contact-us">Hours</a></div>
                  <div className="column has-text-centered"><a href="#team">Team</a></div>
                </div>
              </div>
              <div className="column is-5" id="footer__address">
                <div className="content">
                  <p className="has-text-weight-semibold has-text-centered-mobile">
                    209 Glenridge Ave <br /> Montclair, NJ 07042 <br /> <a href="tel:+19736550125">(973) 655-0125</a>
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
