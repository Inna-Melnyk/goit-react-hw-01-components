import PropTypes from 'prop-types';
import { Row, TableСell } from './Transaction.styled';

export const Transaction = ({ item: { id, type, amount, currency } }) => {
  return (
    <Row key={id}>
      <TableСell>{type}</TableСell>
      <TableСell>{amount}</TableСell>
      <TableСell>{currency}</TableСell>
    </Row>
  );
};

Transaction.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};