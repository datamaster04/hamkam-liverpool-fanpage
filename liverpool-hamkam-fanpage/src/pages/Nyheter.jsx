import "../style/nyheter.css";
import React from "react";
import førsteseier from "../assets/images/førsteseier.jpg";

const OmOss = () => {
  return (
    <>
      <div className="nyheter_header">Nyheter</div>

      <div className="nyheter_box">
        <div className="nyhet_førsteseier">
          <img
            className="førstesier_bilde"
            src={førsteseier}
            alt="HamKam - Sandefjord 18.04.22"
          />
          <a className="førsteseier_header"> Taktsik grep ga 3 poeng</a>
          <div className="førsteseier_text"></div>
        </div>
      </div>
    </>
  );
};

export default OmOss;
