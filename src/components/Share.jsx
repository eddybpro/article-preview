import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import PinterestIcon from "../assets/icon-pinterest.svg";
import ShareIcon from "../assets/icon-share.svg";
import PropTypes from "prop-types";

function Share(props) {
  return (
    <div className="ShareWrapper">
      <h3 className="ShareWrapper-Title">Share</h3>
      <div className="ShareWrapper-SocialIconsBox">
        <img src={FacebookIcon} alt="facebook" />
        <img src={TwitterIcon} alt="twitter" />
        <img src={PinterestIcon} alt="pinterest" />
      </div>

      <button
        className="ShareWrapper-ShareIcon-Btn"
        onClick={() => props.handleClick()}
      >
        <img src={ShareIcon} alt="share" />
      </button>
    </div>
  );
}

Share.propTypes = {
  handleClick: PropTypes.func,
};

export default Share;
