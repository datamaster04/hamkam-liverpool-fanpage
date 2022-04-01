import Logo from "../assets/images/Logo.jpg"
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
          </div>
          <div className=""></div>
        </div>
    )
}

export default OmOss;