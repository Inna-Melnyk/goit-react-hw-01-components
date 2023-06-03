import PropTypes from 'prop-types';
import { ProfileStats } from './ProfileStats/ProfileStats';
import {
  ProfileCard,
  Description,
  ProfileImage,
  Name,
  Info,
} from './Profile.slyled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <ProfileImage
          src={avatar}
          alt="User avatar"
          width="200"
        />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <ProfileStats stats={stats} />

      
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
