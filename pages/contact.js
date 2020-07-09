import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Layout from '../components/general/Layout';
import { getCordinates } from '../lib/custom';
import { updateHeader, updateSocialHeader } from '../redux/settings/action';
import SlideShow from '../components/SlideShow';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.banner = null;
  }

  render() {
    return (
      <Layout>
        <div id="contactPage" className="container">
          <div className="featuring">
            <h2 className="uppercase">CONTACT US</h2>

            <div id="social">
              <h6>FOLLOW US</h6>
              <span className="icon fa fa-facebook" />
              <span className="icon fa fa-twitter" />
              <span className="icon fa fa-instagram" />
            </div>

          </div>

          <div id="works">
            <div className="work">
              <div className="info">
                <h3 className="title uppercase">DRAMA | Deadwater Fell - Channel 4</h3>
                <div className="about">
                  <p>No Drama Ltd </p>
                  <p>108 Broadway </p>
                  <p> MediaCityUK </p>
                  <p> Salford </p>
                  <p> M50 2UW </p>
                </div>

                <p className="phone">
                  <a href="tel:09032232323">09032232323</a>
                </p>
                <p className="mail">
                  <a href="mailto:reciever@mail.com">reciever@mail.com</a>
                </p>
              </div>

              <div className="preview">
                <img src="/img/address-1.png" alt="" />
              </div>
            </div>

            <div className="work">
              <div className="info">
                <h3 className="title uppercase">DRAMA | Deadwater Fell - Channel 4</h3>
                <div className="about">
                  <p>No Drama Ltd </p>
                  <p>108 Broadway </p>
                  <p> MediaCityUK </p>
                  <p> Salford </p>
                  <p> M50 2UW </p>
                </div>

                <p className="phone">
                  <a href="tel:09032232323">09032232323</a>
                </p>
                <p className="mail">
                  <a href="mailto:reciever@mail.com">reciever@mail.com</a>
                </p>
              </div>

              <div className="preview">
                <img src="/img/address-1.png" alt="" />
              </div>
            </div>

          </div>
        </div>

      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({ settings: state.settings });
const mapDispatchToProps = (dispatch) => ({
  updateHeader: (props) => dispatch(updateHeader(props)),
  updateSocialHeader: (props) => dispatch(updateSocialHeader(props)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
