import PropTypes from "prop-types";
import Style from "./FriendList.module.scss";

export default function FriendList({friends}) {
  return (
    <ul className={Style.list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={Style.item}>
            {isOnline ? (
              <span className={Style.statusOn}></span>
            ) : (
              <span className={Style.statusOff}></span>
            )}
            <img
              className={Style.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={Style.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
    
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
)};
