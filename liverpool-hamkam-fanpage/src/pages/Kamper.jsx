import React from "react";
import viflogo from "../assets/images/vålerenga_logo.png";
import hamkamlogo from "../assets/images/HamkamLogo.png";
import vslogo from "../assets/images/vs_logo.jpg";
import eliteserienlogo from "../assets/images/eliteserienlogo.jpg";
import "../style/kamper.css";

const Kamper = () => {
  return (
    <>
      <div className="kamper_box">
        <div className="kamper_header">
          <p className="header_kamper">Kamper A-laget</p>
        </div>
        <div className="nestekamp_header">Neste kamp</div>
        <div className="kamper_nestekamp">
          <div className="logo_container">
            <img
              className="viflogo"
              src={viflogo}
              alt="vålerenga fotball logo png transparent"
            />

            <img className="vslogo" src={vslogo} alt="vs transparent" />

            <img
              className="hamkamlogo"
              src={hamkamlogo}
              alt="HamKam logo transparent"
            />
          </div>
          <div className="nestekamp_header_motstander">Vålerenga - Hamkam</div>
          <div className="nestekamp_info">
            <div className="kamp_informasjon">
              <div className="text_kamp_informasjon">
                16.05.2022 <strong>20:00 #6</strong> Intility Arena
              </div>
            </div>
            <div className="nestekamp_kanal">
              <img
                className="logo_nestekamp_eliteserien"
                src={eliteserienlogo}
                alt="eliteserien logo"
              />
            </div>
          </div>
        </div>
        <div className="container_months">
          <div className="container_mai"></div>
          <div className="container_juni"></div>
          <div className="container_juli"></div>
          <div className="container_august"></div>
          <div className="container_september"></div>
          <div className="container_oktober"></div>
          <div className="container_november"></div>
        </div>
      </div>
    </>
  );
};

export default Kamper;
