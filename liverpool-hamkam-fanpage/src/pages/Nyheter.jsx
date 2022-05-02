import "../style/nyheter.css";
import "../style/OmOss.css";
import React from "react";
import førsteseier from "../assets/images/førsteseier.jpg";

const OmOss = () => {
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
          <p>Foto: Fredrik Olastuen   </p>
          <div className="nyheter_textbox">
            <a className="førsteseier_header">Taktiske grep ga 3 poeng</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OmOss;
