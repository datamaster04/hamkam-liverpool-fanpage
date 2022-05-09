import "../style/nyheter.css";
import "../style/OmOss.css";
import React from "react";
import førsteseier from "../assets/images/førsteseier.jpg";
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
      </div>
    </>
  );
};

export default Nyheter;
