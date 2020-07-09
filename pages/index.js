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
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    // this.onScroll();
    // window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    this.props.updateHeader({
      fixed: false,
      fixedTop: 0,
    });
  }

  onScroll() {
    if (this.banner) {
      const { $ } = window;
      const bannerHeight = $('#banner').height();
      const socialHeaderHeight = $('#socialHeader').outerHeight();
      const headerHeight = this.props.settings.header.height;
      const bannerPositionTop = getCordinates(this.banner).top;
      const socialHeaderPositionTop = getCordinates(this.banner).top;
      console.log(socialHeaderPositionTop, '||', socialHeaderHeight);
      this.props.updateHeader({
        fixed: $('html')[0].scrollTop < socialHeaderHeight,
        fixedTop: socialHeaderHeight,
      });
    }
  }

  render() {
    return (
      <Layout>
        <div id="homePage">
          <div className="featuring container">
            <h2 className="uppercase">DRAMA | Deadwater Fell - Channel 4</h2>
            <p>We provided the full camera & grip package to this Channel 4 & Kudos drama shooting in and around Glasgow.</p>
          </div>
          <div id="banner" ref={(e) => { this.banner = e; }}>
            <SlideShow
              items={[
                {
                  label: 'Education',
                  content: <img
                    src="/img/innovation-3.jpg"
                    alt="martfury"
                  />,
                },
                {
                  label: 'Health',
                  content: <img
                    src="/img/innovation-2.jpg"
                    alt="martfury"
                  />,
                },
                {
                  label: 'Agriculture',
                  content: <img
                    src="/img/innovation-4.jpg"
                    alt="martfury"
                  />,
                },
              ]}
            />
          </div>

          <div className="container">

            <div className="featured-board row">
              <div className="col-lg-2 published">
                <div>
                  <h5>Published</h5>
                </div>
                <p>10 / 12 / 2019</p>
              </div>

              <div className="col-lg-7 details">
                <div>
                  <h2 className="uppercase">Deadwater Fell - Channel 4/Kudos</h2>
                </div>
                <p>
                  <b>Director: Lynsey Miller</b>

                </p>
                <p>
                  <b>Producer: Caroline Levy</b>

                </p>
                <p>
                  <b>Line Producer: Matthew Brown</b>

                </p>
                <p>
                  <b>DOP: Neus Ollé</b>

                </p>

                <p>This was our first foray into major long form drama in Scotland and went without a hitch. Initial testing and prep happened at our Manchester HQ with further testing up in Scotland pre shoot. It was such a pleasure to work with Neus again after working across shorter projects a few years previous. Her attitude to her work, vision for the project and general personality were uplifting to be around and it was a real joy to meet up with all crew after wrap for a bit of a knees up.
                </p>

                <p> <b> Equipment supplied: </b>
                  2x Arri Alexa Mini and TLS Rehoused Canon K35 & FD Lenses
                </p>

                <a href="https://www.channel4.com/press/news/deadwater-fell-first-look-images-released">https://www.channel4.com/press/news/deadwater-fell-first-look-images-released</a>

                <iframe src="https://www.youtube.com/embed/yEQsLSfl8gA" frameBorder="0" width="560" height="315" />
              </div>

              <div className="col-lg-3 more-work">
                <div>
                  <h4>MORE WORK</h4>

                </div>
                <div className="works">
                  <div className="work">
                    <p className="date">10 / 12 / 2019</p>
                    <h5 className="title">
                      <a href="/"> DRAMA | Cold Call - Channel 5 </a>
                    </h5>
                    <img className="preview" src="/img/work 1.jpg" alt="" />

                  </div>

                  <div className="work">
                    <p className="date">10 / 12 / 2019</p>
                    <h5 className="title">
                      <a href="/"> DRAMA | Cold Call - Channel 5 </a>
                    </h5>
                    <img className="preview" src="/img/work 2.jpg" alt="" />

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
