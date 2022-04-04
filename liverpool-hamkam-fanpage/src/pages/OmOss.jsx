import Logo from "../assets/images/Logo.jpg";
import LfcLogo from "../assets/images/liverpool_logo.png";
import HamLogo from "../assets/images/Hamarkameratene_logo.png";
import "../style/App.css";
import "../style/OmOss.css";

const OmOss = () => {
  return (
    <div className="OmOss_container">
      <div className="OmOss_container-box">
        <div className="OmOss_container-logo">
          <img
            className="OmOss_container-logo-image"
            src={Logo}
            alt="Liverpool og Hamkam Fanpage"
          />
        </div>
        <div className="container-textbox">
          <div className="container-header"> Hamkam & Liverpool Fanpage</div>
          <div className="container-tags">
            <p>Dette er nettsiden for fanpagen. Jeg har følgt norsk fotball 
            mer og mer siden jeg var liten, og Kamma har blitt mer og mer av livet mitt. 
            Det kom inn naturlig med familien da far hadde en tilkytning til Hamar, så det 
            kom inn med "farsmelka". Engelsk fotball begynte jeg å følge med på i 
            ungdomsalder, og da falt Liverpool naturlig i fotballkjærligheten. 
            Jürgen Klopp, en manager av de sjeldnere, utrolig dyktig, og 
            slagordet "You never walk alone" fanget meg. I denne 
            fanpagen følger jeg klubbene på og utenfor banen!</p>
          </div>
        </div>
        <div className="container-logo">
          <img
            className="OmOss-liverpool-logo-image"
            src={LfcLogo}
            alt="Liverpool og Hamkam Fanpage"
          />
        </div>
        <div className="container-textbox">
          <div className="container-header"> Liverpool FC</div>
          <div className="container-tags">
            <p>Liverpool Football Club er en profesjonell 
                fotballklubb lokalisert i Liverpool, England, som 
                konkurrerer i Premier League, et av topplagene 
                i Premier League. Nasjonalt har klubben vunnet 
                nitten ligatitler, sju FA-cuper, rekordhøye 
                ni ligacuper og femten FA Community Shields. 
                I Europa har de vunnet 6 Champions League titler,
                3 europa league titler, og 4 super cup titler.</p>
          </div>
        </div>
        <div className="container-logo">
          <img
            className="container-hamarkameratene-logo-image"
            src={HamLogo}
            alt="Liverpool og Hamkam Fanpage"
          />
        </div>
        <div className="container-textbox">
          <div className="container-header"> Hamarkameratene </div>
          <div className="container-tags">
            <p>Hamarkameratene, ofte forkortet til HamKam eller
            Ham-Kam, er en norsk fotballklubb lokalisert i Hamar by. 
            Klubben ble stiftet i 1918, opprinnelig under navnet Freidig. 
            HamKam rykket sist opp til Eliteserien i 2021.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmOss;
