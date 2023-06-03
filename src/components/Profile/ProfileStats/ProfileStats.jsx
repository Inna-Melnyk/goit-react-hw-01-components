import PropTypes from 'prop-types';
import { List, Item } from './ProfileStats.styled';


export const ProfileStats = ({ stats: { followers, views, likes } }) => {

    return (
        <List>
  <Item>
    <span>Followers</span>
    <span>{followers}</span>
  </Item>
  <Item>
    <span>Views</span>
    <span>{views}</span>
  </Item>
  <Item>
    <span>Items</span>
    <span>{likes}</span>
  </Item>
</List>
    )
}
    
    ProfileStats.propTypes = {
        stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired,
    };;
