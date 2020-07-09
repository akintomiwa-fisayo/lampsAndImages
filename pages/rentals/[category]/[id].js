import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Layout from '../../../components/general/Layout';
import { getCordinates } from '../../../lib/custom';
import { updateHeader, updateSocialHeader } from '../../../redux/settings/action';
import SlideShow from '../../../components/SlideShow';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeContent: "description",
    }

  }

  render() {
    const { state } = this;
    return (
      <Layout>
        <div id="rentalItemPage">
          <div className="featuring">
            <div className="container">
              <div className="preview">
                <SlideShow
                  items={[
                    {
                      label: 'Health',
                      content: <img
                        src="/img/innovation-3.jpg"
                        alt="martfury"
                      />,
                    },
                    {
                      label: 'Health',
                      content: <img
                        src="/img/innovation-3.jpg"
                        alt="martfury"
                      />,
                    },
                    {
                      label: 'Health',
                      content: <img
                        src="/img/innovation-3.jpg"
                        alt="martfury"
                      />,
                    },
                    {
                      label: 'Health',
                      content: <img
                        src="/img/innovation-3.jpg"
                        alt="martfury"
                      />,
                    },
                    {
                      label: 'Health',
                      content: <img
                        src="/img/innovation-3.jpg"
                        alt="martfury"
                      />,
                    },
                  ]}
                />
              </div>

              <div className="infos">
                <span className="category">Camera</span>
                <h2 className="uppercase">Sony Venice</h2>
                <p className="description">Sony's flagship 6K Full Frame camera.</p>
                <div className="actions">
                  <button type="button" className="btn btn-primary">
                    <p>
                      <b>call 09078454578</b>
                    </p>
                    <p>to hire this item</p>
                  </button>

                  <button type="button" className="btn btn-primary">
                    <p>send</p>
                    <p> enquiry </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="head">
              <div className="container">
                <button type="button"
                 className={state.activeContent === "description"? "active" : ""} 
                 onClick={() => {
                  this.setState({ activeContent: "description" })
                }}>description</button>
                <button type="button"
                 className={state.activeContent !== "description"? "active" : ""} 
                 onClick={() => {
                  this.setState({ activeContent: "enquiry-form" })
                }}>send enquiry</button>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-9 details">
                  <div className="description" style={{ display: `${state.activeContent === 'description' ? "" : "none"}` }}>
                    <p>

                      We now have Sony's super capable flagship Venice 6K Full Frame camera system available for hire from our base in Manchester. This camera which seems to be increasing in popularity day by day has already been rented out to numerous commercial productions across the north of England and also in London, Scotland and Wales - get in touch for more info and for pricing and availability.
                    </p>

                    <p>
                      See below for an overview of the camera taken from Sony's official minisite.
                    </p>
                    <p>
                      <b> Full-Frame sensor for cinema </b>
                      VENICE features an all-new Full-Frame sensor with the classic 36 x 24mm dimensions that have been a staple of photography for over 100 years. Designed exclusively for high-end cinematography, this sensor can capture images up to a maximum resolution of 6048 x 4032.
                    </p>

                    <p>

                      Switchable imager modes mean VENICE can support an unprecedented number of cinematic aspect ratios for complete creative freedom:
                    </p>

                    <p>
                      <b> Full width 36 mm 6K </b>

                      In full-frame, you can use the full 6048 pixel width of the sensor for 6K imager modes such as 3:2, 2.39:1*, 1.85:1, 17:9 and 16.9*. Equivalent to 4-perforation motion picture film, these 6K modes allow for extra shallow depth of field, super-wide shooting and other creative effects.
                    </p>

                    <p>
                      <b> Super35 anamorphic 4K </b>

                      For super wide screen productions, VENICE offers two full height 2x squeeze anamorphic imager modes that include 6:5 and 4:3 recording modes for 12:5 (known as 2.39:1) and 8:3 (2.66:1) scenes respectively.
                    </p>

                    <p>
                      Explore how VENICE can meet your production requirements with the firmware and licensing requirements in the aspect ratio chart:
                    </p>

                    <img src="/img/venice-overview.jpg" alt="" width="320px" />
                  </div>
                  <div className="enquiry-form" style={{ display: `${state.activeContent !== 'description' ? "" : "none"}` }}>
                    <p>Please complete the form below to enquire about "Sony Venice"</p>

                    <div className="input-field">
                      <p className="label">Name</p>
                      <input />
                    </div>

                    <div className="input-field">
                      <p className="label">email</p>
                      <input />
                    </div>

                    <div className="input-field">
                      <p className="label">telephone</p>
                      <input />
                    </div>

                    <div className="input-field">
                      <p className="label">message</p>
                      <textarea />
                    </div>

                    <button type="button" className="btn btn-primary">Send enquiry ></button>
                  </div>

                </div>

                <div id="section" className="col-lg-3">
                  <div>
                    <h5 className="uppercase">Cameras</h5>
                  </div>

                  <div className="similar-items">
                    <Link href="/">
                      <a className="section active">Cameras</a>
                    </Link>
                    <Link href="/">
                      <a className="section">Cameras Accessories</a>
                    </Link>
                    <Link href="/">
                      <a className="section">Anamorphic lenses</a>
                    </Link>
                    <Link href="/">
                      <a className="section">Prime Lenses</a>
                    </Link>
                    <Link href="/">
                      <a className="section">Zoom Lenses</a>
                    </Link>
                    <Link href="/">
                      <a className="section">Playback / DIT</a>
                    </Link>
                  </div>

                  <div className="sections">
                    <Link href="/">
                      <a className="section">Cameras Accessories</a>
                    </Link>
                    <Link href="/">
                      <a className="section">Anamorphic lenses</a>
                    </Link>
                    <Link href="/">
                      <a className="section">Prime Lenses</a>
                    </Link>
                    <Link href="/">
                      <a className="section">Zoom Lenses</a>
                    </Link>
                    <Link href="/">
                      <a className="section">Playback / DIT</a>
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </section>
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
