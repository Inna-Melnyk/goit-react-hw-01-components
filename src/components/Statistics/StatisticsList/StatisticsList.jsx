import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import { List } from './StatisticsList.styled';


export const StatisticsList = ({ items }) => {
  return (
    <List>
      {items.map(item => {
        return <StatisticsItem item={item} key={item.id} />;
      })}
    </List>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
};
