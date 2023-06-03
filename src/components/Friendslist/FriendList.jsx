import PropTypes from 'prop-types';
import { Friend } from './Friend/Friend';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        return <Friend item={item} key={item.id} />
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
};
