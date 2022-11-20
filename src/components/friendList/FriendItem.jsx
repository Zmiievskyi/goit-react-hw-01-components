import PropTypes from "prop-types";
import Style from "./FriendItem.module.scss";

export default function FriendItem({ isOnline, avatar, name }) {
  return (
    <li className={Style.item}>
      {isOnline ? (
        <span className={Style.statusOn}></span>
      ) : (
        <span className={Style.statusOff}></span>
      )}
      <img
        className={Style.avatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={Style.name}>{name}</p>
    </li>
  );
}


FriendItem.propTypes = {
  
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  
};