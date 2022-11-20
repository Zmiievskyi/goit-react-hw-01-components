import PropTypes from "prop-types";
import Style from "./Profile.module.scss";

export default function Profile({ user }) {
  const { avatar, username, tag, location, stats } = user;
  return (
    <div className={Style.profile}>
      <div className={Style.description}>
        <img src={avatar} alt="User avatar" className={Style.avatar} />
        <p className={Style.name}>{username}</p>
        <p className={Style.tag}>@{tag}</p>
        <p className={Style.location}>{location}</p>
      </div>
      <ul className={Style.stats}>
        <li>
          <span className={Style.label}>Followers</span>
          <span className={Style.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={Style.label}>Views</span>
          <span className={Style.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={Style.label}>Likes</span>
          <span className={Style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

