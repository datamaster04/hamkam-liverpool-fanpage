import Logo from "../assets/images/Logo.jpg";
import LfcLogo from "../assets/images/LfcLogo.png";
import HamLogo from "../assets/images/HamkamLogo.png";
import "../style/App.css";
import "../style/OmOss.css";

const OmOss = () => {
  return (
    <div className="OmOss_box">
      <div className="OmOss-logo">
        <img
          className="OmOss-logo-image"
          src={Logo}
          alt="Liverpool og Hamkam Fanpage"
        />
        <img
          className="OmOss-hamkam-logo-image"
          src={HamLogo}
          alt="Hamarkameratene"
        />
        <img
          className="OmOss-liverpool-logo-image"
          src={LfcLogo}
          alt="Liverpool FC"
        />
      </div>
      <div className="om_oss_header">
        <p className="om_oss_fanpage_header">Liverpool & HamKam fanpage</p>
        <p className="om_oss_hamkam_header">Hamarkameratene</p>
        <p className="om_oss_liverpool_header">Liverpool FC</p>
      </div>
      <div className="om_oss_tekst">
        <div className="om_oss_fanpage_text">Dette er en fanpage for klubbene HamKam i Norge og Liverpool i England.</div>
        <div className="om_oss_hamkam_text">Hamarkameratene, ofte forkortet til HamKam eller
            Ham-Kam, er en norsk fotballklubb lokalisert i Hamar by. 
            Klubben ble stiftet i 1918, opprinnelig under navnet Freidig. 
            HamKam rykket sist opp til Eliteserien i 2021.</div>
        <div className="om_oss_liverpool_text">Liverpool Football Club er en profesjonell 
        fotballklubb med lokalisert i Liverpool, England, som konkurrerer i Premier League, 
        topplaget i engelsk fotball. Innenlands har klubben vunnet nitten ligatitler, 
        syv FA-cuper, rekordhøye ni ligacuper og femten FA Community Shields.</div>
      </div>
    </div>
  );
};

export default OmOss;
