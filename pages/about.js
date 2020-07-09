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
        <div id="aboutPage">
          <div className="featuring container">
            <h2 className="uppercase">We are No Drama</h2>
            <p>We are an independent rental house with branches in Manchester and Glasgow specialising in the hire of Digital Cinema Cameras & Lenses, Grip, DIT & Playback equipment to the film, television and commercials industry.</p>
          </div>
          <div id="banner" ref={(e) => { this.banner = e; }}>
            <img alt="" src="/img/blog/2.jpg" />
          </div>

          <div className="container">

            <div className="featured-board row">
              <div className="col-lg-8 details">
                <div>
                  <h2 className="uppercase">Who we are</h2>
                </div>
                <p>
                  <b>No Drama is a cutting edge supplier of Camera, Grip, Video and DIT equipment to the motion picture industry.</b>

                </p>

                <p>We service Commercials, TV Drama, Feature Films and Music Videos. We offer the latest technology with over 25 years of industry experience and highly skilled staff to help your production to run smoothly and efficiently.
                </p>

                <div className="testimonies">
                  <p className="title">
                    <h5 className="uppercase">Client Testimonials</h5>
                  </p>

                  <blockquote>
                    <div className="holder">
                      <p>
                        Great to have worked with Carl and his team at NO DRAMA on our recent NIKE add, for Jonathan Glazer. I knew that working for Academy Films and Jonathan, anything could happen and I had to be prepared. So I was confident that NO DRAMA could provide the back up we needed. It was nothing short of a cruise... NO DRAMA - No worries...
                      </p>
                      <span>-- Barry Ackroyd BSC</span>
                    </div>
                  </blockquote>

                  <blockquote>
                    <div className="holder">
                      <p>
                        Great to have worked with Carl and his team at NO DRAMA on our recent NIKE add, for Jonathan Glazer. I knew that working for Academy Films and Jonathan, anything could happen and I had to be prepared. So I was confident that NO DRAMA could provide the back up we needed. It was nothing short of a cruise... NO DRAMA - No worries...
                      </p>
                      <span>-- Barry Ackroyd BSC</span>
                    </div>
                  </blockquote>

                  <blockquote>
                    <div className="holder">
                      <p>
                        Great to have worked with Carl and his team at NO DRAMA on our recent NIKE add, for Jonathan Glazer. I knew that working for Academy Films and Jonathan, anything could happen and I had to be prepared. So I was confident that NO DRAMA could provide the back up we needed. It was nothing short of a cruise... NO DRAMA - No worries...
                      </p>
                      <span>-- Barry Ackroyd BSC</span>
                    </div>
                  </blockquote>

                </div>

              </div>

              <div className="col-lg-4 clients">
                <div>
                  <h6>SELECT CLIENTS</h6>
                </div>

                <div className="clients-holder">

                  <div className="client">
                    <img src="/img/clients/bbc.png" alt="" />
                    <img src="/img/clients/channel4.png" alt="" />
                  </div>

                  <div className="client">
                    <img src="/img/clients/itv.png" alt="" />
                    <img src="/img/clients/sky.png" alt="" />
                  </div>

                  <div className="client">
                    <img src="/img/clients/channel4.png" alt="" />
                    <img src="/img/clients/itv.png" alt="" />
                  </div>

                  <div className="client">
                    <img src="/img/clients/bbc.png" alt="" />
                    <img src="/img/clients/sky.png" alt="" />

                  </div>
                </div>
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
