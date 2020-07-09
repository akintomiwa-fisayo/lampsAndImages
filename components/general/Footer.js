/* eslint-disable react/no-danger */
import React from 'react';
import Link from 'next/link';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div className="content container">
            <div className="column">
              <h4>Lamps ANd Images</h4>
              <p>
                Do non amet proident eiusmod magna et. Anim ipsum aliquip reprehenderit est in incididunt sit. Sit do eu labore irure. Dolor laboris commodo ea ad labore repr

              </p>
            </div>

            <div className="column">
              <h4>Quick Links</h4>
              <p className="link">
                <Link href="/"><a>Home</a></Link>
              </p>
              <p className="link">
                <Link href="/"><a>Rental catalogue</a></Link>
              </p>
              <p className="link">
                <Link href="/"><a>About</a></Link>
              </p>
              <p className="link">
                <Link href="/"><a>Latest work</a></Link>
              </p>
              <p className="link">
                <Link href="/"><a>Contact</a></Link>
              </p>
            </div>

            <div className="column">
              <h4>Stay in touch</h4>
              <div className="infos">
                <div className="info">
                  <span className="icon-map-marker icon" />
                  <span>The address to the company's physical location</span>
                </div>
                <div className="info">
                  <span className="icon-envelope icon" />
                  <span>Info@lapmsAndImages.com</span>
                </div>
                <div className="info">
                  <span className="icon-telephone icon" />
                  <span>090673248798</span>
                </div>
              </div>
              <div className="social">
                <span className="fa fa-facebook-square" />
                <span className="fa fa-linkedin-square" />
                <span className="fa fa-twitter-square" />
                <span className="fa fa-instagram" />
              </div>
            </div>
          </div>
          <p className="copy-right">copyright &copy; 2020 Lamps  And Images</p>
        </footer>
        {/*  <a href="#top" className="btn btn-primary rounded-circle btn-back-to-top" data-smooth-scroll data-aos="fade-up" data-aos-offset="2000" data-aos-mirror="true" data-aos-once="false">
          <span alt="Icon" className="icon bg-white" data-inject-svg />
        </a> */}
      </>
    );
  }
}

export default Footer;
