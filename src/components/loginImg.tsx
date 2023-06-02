import backround from "../imges/background.jpg";
import CloseIcon from "@mui/icons-material/Close";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import Forward5Icon from "@mui/icons-material/Forward5";
import MyCarousel from "./carousel";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const LoginImg = () => {
  return (
    <div className="loginImg">
      <img src={backround}></img>
      <div className="loginImgInfo">
        <div className="topIcons">
          <Forward5Icon />
          <CloseIcon />
          <PanoramaFishEyeIcon />
        </div>
        <div className="carousel">
          <MyCarousel />
        </div>
        <div className="contactUs">
          <div className="email">
            <LanguageIcon fontSize="small" /> <span>aesthisia.com</span>
          </div>
          <div style={{display:'flex', gap:6}}>
            <LinkedInIcon />
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LoginImg;
