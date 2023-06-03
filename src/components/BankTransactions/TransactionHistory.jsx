import PropTypes from 'prop-types';
import { Transaction } from './Transaction/Transaction';
import { Table, TableHeading, Title} from './TransactionHistory.styled';
import { Row } from './Transaction/Transaction.styled';
export const TransactionHistory = ({items}) => {
  return (
    <Table>
      <TableHeading>
        <Row>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </Row>
      </TableHeading>

      <tbody>
        {items.map(item => {
          return <Transaction item={item} key={item.id} />;
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
};
