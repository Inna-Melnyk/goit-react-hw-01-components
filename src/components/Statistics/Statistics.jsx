import PropTypes from 'prop-types';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { Section, Title } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatisticsList items={stats} />
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
};
