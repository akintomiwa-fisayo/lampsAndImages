import React from 'react';
import '../css/footer.css';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="content">
          <div className="info">
            <div className="header">
              <p>navigation</p>
            </div>
            <div className="content">
              <a href="" className="link">
                <li>home</li>
              </a>
              <br />

              <a href="" className="link">
                <li>hire equipments</li>
              </a>
              <br />

              <a href="" className="link">
                <li>about us</li>
              </a>
              <br />

              <a href="" className="link">
                <li>contact us</li>
              </a>
            </div>
          </div>

          <div className="info">
            <div className="header">
              <p>contact</p>
            </div>
            <div className="content">
              <div className="detail">
                <p>M —  </p>
                <p> info@gmail.com</p>
              </div>

              <div className="detail">
                <p>A —  </p>
                <p> company's address comes here</p>
              </div>

              <div className="detail">
                <p>P —  </p>
                <p> +2337868997868</p>
              </div>

            </div>
          </div>


          <div className="info">
            <div className="header">
              <p>social</p>
            </div>
            <div className="content">
              <div className="detail">
                <span className="fab fa-facebook-f" />
              </div>

              <div className="detail">
                <span className="fab fa-twitter" />
              </div>

              <div className="detail">
                <span className="fab fa-pinterest-p" />
              </div>

              <div className="detail">
                <span className="fab fa-instagram" />
              </div>

            </div>
          </div>

        </div>

        <div>
          <p>© 2020 Lamp And Images Nigera.</p>
          <p>All Rights Reserved.</p>
        </div>

      </footer>
    );
  }
}

export default Footer;
