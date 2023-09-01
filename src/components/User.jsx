import UserImg from "../assets/avatar-michelle.jpg";
import ShareIcon from "../assets/icon-share.svg";
import PropTypes from "prop-types";

function User(props) {
  return (
    <div className="User">
      <div className="User-UserBox">
        <img src={UserImg} alt="michelle appleton" />
        <div className="User-UserBox-UserInfo">
          <h2 className="User-UserBox-UserInfo-UserName">Michelle Appleton</h2>
          <p>28 Jun 2020</p>
        </div>
      </div>
      <button
        className={
          props.share
            ? "User-ShareIcon-Btn    User-ShareIcon-Btn-clicked"
            : "User-ShareIcon-Btn"
        }
        onClick={() => props.handleClick()}
      >
        <img src={ShareIcon} alt="share" />
      </button>
    </div>
  );
}

User.propTypes = {
  share: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default User;
