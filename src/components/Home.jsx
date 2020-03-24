/* eslint-disable no-plusplus */
/* eslint-disable no-constant-condition */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import '../css/home.css';
import { $, popMessage } from '../js/lib';
import equip1 from '../images/equip1.jpg';
import equip2 from '../images/equip2.jpg';
import equip3 from '../images/equip3.jpg';
import equip4 from '../images/equip4.jpg';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';
import image11 from '../images/image11.jpg';
import image12 from '../images/image12.jpg';

import client1 from '../images/client1.png';
import client2 from '../images/client2.png';
import client3 from '../images/client3.png';
import client4 from '../images/client4.png';
import client5 from '../images/client5.png';
import client6 from '../images/client6.png';
import client7 from '../images/client7.png';
import client8 from '../images/client8.png';
import client9 from '../images/client9.png';
import client10 from '../images/client10.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipment: 0,
    };

    this.equipments = [
      'cameras',
      'microphones',
      'stages',
      'lights',
      'drums',
    ];
  }

  componentDidMount() {
    setInterval(() => {
      let { equipment } = this.state;
      equipment++;
      if (equipment >= this.equipments.length) {
        equipment = 0;
      }
      this.setState(() => ({
        equipment,
      }));
    }, 2000);
  }


  render() {
    const { state } = this;
    return (
      <div id="mainContent" align="center" data-page="Home">
        <div className="banner">
          <img loop muted src={image6} className="parallax-bk" alt="" />
          <div className="overlay">
            <section className="content">
              <p className="bold">WE SETUP CONCERTS AND PARTIES, LITERALLY BUILD THEM</p>
              <p>Hire strong and reliable equipments so your event goes smooth without hiccups.<br /> Hire us!.</p>
            </section>
            <section>
              <div id="ourSpecialties" className="bold">
                <p className="item active">{this.equipments[state.equipment]}</p>
              </div>
              <p className="">you name it</p>
            </section>
          </div>
        </div>

        <button
          type="button"
          id="projectLabel"
          className="btn btn-secondary"
        > Hire Equipments
        </button>

        <div id="featuredProject" className="articles">
          <div className="item v-double h-double">
            <img src={image1} alt="" />
          </div>

          <div className="item v-double">
            <img src={image2} alt="" />
          </div>

          <div className="item">
            <img src={image3} alt="" />
          </div>

          <div className="item v-double">
            <img src={image4} alt="" />
          </div>
          <div className="item">
            <img src={image5} alt="" />
          </div>

          <div className="item h- v-double">
            <img src={image6} alt="" />
          </div>

          <div className="item">
            <img src={image7} alt="" />
          </div>

          <div className="item">
            <img src={image8} alt="" />
          </div>
          <div className="item v-double h-double">
            <img src={image9} alt="" />
          </div>

          <div className="item">
            <img src={image10} alt="" />
          </div>

          <div className="item">
            <img src={image11} alt="" />
          </div>

        </div>

        <div id="clients">
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
          <img src={client5} alt="" />
          <img src={client6} alt="" />
          <img src={client7} alt="" />
          <img src={client8} alt="" />
          <img src={client9} alt="" />
          <img src={client10} alt="" />

        </div>
      </div>
    );
  }
}

export default Home;
