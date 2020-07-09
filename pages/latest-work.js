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
        <div id="latestWorkPage" className="container">
          <div className="featuring">
            <h2 className="uppercase">Latest Work</h2>

            <div id="social">
              <h6>FOLLOW US</h6>
              <span className="icon fa fa-facebook"/>
              <span className="icon fa fa-twitter"/>
              <span className="icon fa fa-instagram"/>
            </div>

          </div>


          <div id="works">
            <div className="work">
              <div className="info">
                <p className="date">12/12/2020</p>
                <h2 className="title uppercase">DRAMA | Deadwater Fell - Channel 4</h2>
                <div className="about">
                We provided the full camera & grip package to this Channel 4 & Kudos drama shooting in and around Glasgow.
                </div>

                <button type="button" className="btn btn-primary">View More > </button>
              </div>

              <div className="preview">
                <img src="/img/work 1.jpg" alt="" />
              </div>
            </div>
            
            <div className="work">
              <div className="info">
                <p className="date">12/12/2020</p>
                <h2 className="title uppercase">DRAMA | Deadwater Fell - Channel 4</h2>
                <div className="about">
                We provided the full camera & grip package to this Channel 4 & Kudos drama shooting in and around Glasgow.
                </div>

                <button type="button" className="btn btn-primary">View More > </button>
              </div>

              <div className="preview">
                <img src="/img/work 1.jpg" alt="" />
              </div>
            </div>

            <div className="work">
              <div className="info">
                <p className="date">12/12/2020</p>
                <h2 className="title uppercase">DRAMA | Deadwater Fell - Channel 4</h2>
                <div className="about">
                We provided the full camera & grip package to this Channel 4 & Kudos drama shooting in and around Glasgow.
                </div>

                <button type="button" className="btn btn-primary">View More > </button>
              </div>

              <div className="preview">
                <img src="/img/work 1.jpg" alt="" />
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
