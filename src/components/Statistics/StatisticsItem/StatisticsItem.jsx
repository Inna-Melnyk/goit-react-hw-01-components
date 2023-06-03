import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ item: { id, label, percentage } }) => {
  return (
    <Item key={id}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
