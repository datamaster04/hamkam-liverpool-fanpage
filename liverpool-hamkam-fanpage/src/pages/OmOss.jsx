import Logo from "../assets/images/Logo.jpg";
import LfcLogo from "../assets/images/Logo.png";
import HamLogo from "../assets/images/HamkamLogo.png";
import "../style/App.css";
import "../style/OmOss.css";
import React from "react";

const OmOss = () => {
  return (
    <>
      <div className="om_oss_header">Om Oss</div>

      <div className="om_oss_boxes">
        <div className="om_oss_fanpage_box">
          <img
            className="OmOss-logo-image"
            src={Logo}
            alt="Liverpool og Hamkam Fanpage"
          />
          <div className="om_oss_fanpage_textbox">
            <p className="om_oss_fanpage_header">Liverpool & HamKam fanpage</p>
            <div className="om_oss_fanpage_text">
              Dette er en fanpage for klubbene HamKam i Norge og Liverpool i
              England. Jeg følger klubbene i kamper, under sesongen med
              overganger, nyheter, i ligaen og HamKam på selveste Briskeby!
            </div>
            <div className="om_oss_fanpage_motto">
              I våre klubber, står vi sammen, vinn eller tap!
            </div>
          </div>
        </div>
        <div className="om_oss_hamkam_box">
          <img
            className="OmOss-hamkam-logo-image"
            src={HamLogo}
            alt="Hamarkameratene"
          />
          <p className="om_oss_hamkam_header">Hamarkameratene</p>
          <div className="om-oss-hamkam-text">
            Hamarkameratene, ofte forkortet til HamKam eller Ham-Kam, er en
            norsk fotballklubb lokalisert i Hamar by. Klubben ble stiftet i
            1918, opprinnelig under navnet Freidig. HamKam rykket sist opp til
            Eliteserien i 2021.
          </div>
          <div className="om_oss_hamkam_EgetMotto">
            På Brikseby, på briskeby, her er det fotball, øl og kamma!{" "}
          </div>
        </div>
        <div className="om_oss_liverpool_box">
          <img
            className="OmOss-liverpool-logo-image"
            src={LfcLogo}
            alt="Liverpool FC"
          />
          <p className="om_oss_liverpool_header">Liverpool FC</p>
          <div className="om_oss_liverpool_text">
            Liverpool Football Club er en profesjonell fotballklubb med
            lokalisert i Liverpool, England, som konkurrerer i Premier League,
            topplaget i engelsk fotball. Innenlands har klubben vunnet nitten
            ligatitler, syv FA-cuper, rekordhøye ni ligacuper og femten FA
            Community Shields.
          </div>
          <div className="om_oss_liverpool_motto">You'll Never Walk Alone</div>
        </div>
      </div>
    </>
  );
};

export default OmOss;
