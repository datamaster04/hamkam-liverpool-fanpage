import "../style/nyheter.css";
import "../style/OmOss.css";
import React from "react";
import førsteseier from "../assets/images/førsteseier.jpg";
import fotballtrøyefredag from "../assets/images/FotballtrøyeFredag.png";
import aafknestemotstander from "../assets/images/AafkNesteMotstander.png";
import poengdelingmotaalesund from "../assets/images/PoengdelingMotAalesund.png";
import { Link } from "react-router-dom";

const Nyheter = () => {
  return (
    <>
      <div className="nyheter_header">Nyheter</div>

      <div className="nyheter_box">
        <div className="nyhet_førsteseier">
          <img
            className="nyheter-image"
            src={førsteseier}
            alt="Liverpool og Hamkam Fanpage"
          />
          <p>Foto: Fredrik Olastuen </p>
          <div className="nyheter_textbox">
            <Link to={"/førsteseier"} className="førsteseier_header">
              Taktiske grep ga 3 poeng
            </Link>
          </div>
        </div>
        <div className="nyhet_fotballtrøyefredag">
          <img
            className="nyheter-image"
            src={fotballtrøyefredag}
            alt="Liverpool og Hamkam Fanpage"
          />
          <p>Foto: Fredrik Olastuen </p>
          <div className="nyheter_textbox">
            <Link to={"/førsteseier"} className="førsteseier_header">
              Taktiske grep ga 3 poeng
            </Link>
          </div>
        </div>
        <div className="nyhet_nestemotstanderaalesund">
          <img
            className="aalesund_neste_motstander-bilde"
            src={aafknestemotstander}
            alt="Liverpool og Hamkam Fanpage"
          />
          <p>Foto: Fredrik Olastuen </p>
          <div className="nyheter_textbox">
            <Link to={"/førsteseier"} className="førsteseier_header">
              Taktiske grep ga 3 poeng
            </Link>
          </div>
        </div>
        <div className="nyhet_poengdelingmotaafk">
          <img
            className="nyheter-image"
            src={poengdelingmotaalesund}
            alt="Liverpool og Hamkam Fanpage"
          />
          <p>Foto: Fredrik Olastuen </p>
          <div className="nyheter_textbox">
            <Link to={"/førsteseier"} className="førsteseier_header">
              Taktiske grep ga 3 poeng
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nyheter;
