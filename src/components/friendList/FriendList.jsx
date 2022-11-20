import PropTypes from "prop-types";
import Style from "./FriendList.module.scss";
import FriendItem from "./FriendItem";

export default function FriendList({ friends }) {
  return (
    <ul className={Style.list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
    })
  ),
};
