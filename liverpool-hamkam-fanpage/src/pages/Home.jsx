import React from "react";
import "../style/App.css";
import Logo from "../assets/images/Logo.jpg";
import "../style/Home.css";
import Anfield from "../assets/images/Anfield.jpg";
import BriskebyStadion from "../assets/images/BriskebyStadion.jpg";

const Home = (props) => {
  return (
    <section>
      <div className="container">
        <div className="container-box">
          <div className="container-logo">
            <img
              className="container-logo-image"
              src={Logo}
              alt="Liverpool og Hamkam Fanpage"
            />
          </div>
          <div className="container-textbox">
            <div className="container-header"> Hamkam & Liverpool Fanpage</div>
            <div className="container-tags">
              <p>325 innlegg</p>
              <p>131 følgere</p>
              <p>108 følger</p>
            </div>
            <div className="container-text">
              <p className="header-container-text">
                Hamkam & Liverpool fanpage
              </p>
              <p className="theme-header">Sport</p>
              <p className="description">
                Jeg følger HamKam og Liverpool FC sine klubblag, og har et stort
                hjerte for klubbene, je vil dele nyheter, overganger, rykter, og
                følge kamper!
              </p>
              <p className="following-text">
                Followed by abdul_alkhatib_, christianlarsen_04, stianchef84 +26
                more
              </p>
            </div>
          </div>
        </div>
        <div className="stadion_container">
          <div className="home_image_overskrift">
            <p className="header_home_image_briskeby">Briskeby Stadion</p>
            <p className="header_home_image_anfield">Anfield</p>
          </div>
          <div className="stadion">
            <img
              className="briskeby"
              src={BriskebyStadion}
              alt="Liverpool og Hamkam Fanpage"
            />

            <img
              className="anfield"
              src={Anfield}
              alt="Liverpool og Hamkam Fanpage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
