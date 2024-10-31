import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import wave from "../assets/wave.svg";
import wave2 from "../assets/wave2.svg";
import wave3 from "../assets/wave3.svg";
import blob from "../assets/blob.svg";
import { faUser } from "@fortawesome/free-regular-svg-icons";
const Card = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="svg-container">
          <img className="svg-1" src={wave2} alt="" />
          <img className="svg-2" src={wave} alt="" />
          <img className="svg-3" src={wave3} alt="" />
        </div>
        <div className="image-container">
          <img src={blob} alt="" />
          <FontAwesomeIcon className="user-logo" icon={faUser} size="lg" />
        </div>
        <div className="content-contianer">
          <div className="name-email-container">
            <div className="name-container ">Johnny Rogers</div>
            <div className="email-container font">@jonnyroggers</div>
          </div>
          <div className="logos-container">
            <FontAwesomeIcon size="sm" icon={faFacebook} />
            <FontAwesomeIcon size="sm" icon={faLinkedin} />
            <FontAwesomeIcon size="sm" icon={faTwitter} />
            <FontAwesomeIcon size="sm" icon={faInstagram} />
          </div>
          <div className="description-container">
            <p>
              Crafting Brand and communication stratgies, creating visual
              designs, Leading art direction and capturing portals through
              photography
            </p>
          </div>
        </div>
        <div className="button-container">
          <div className="button-follow">Follow</div>
          <div className="button-Message">Message</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
