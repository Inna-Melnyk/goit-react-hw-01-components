import PropTypes from 'prop-types';
import { Item, Name, Status } from './Friend.styled';

export const Friend = ({ item: { id, avatar, name, isOnline } }) => {
  return (
    <Item key={id}>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

Friend.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
