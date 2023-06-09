import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile/Profile';
import { Container } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friendslist/FriendList';
import { TransactionHistory } from './BankTransactions/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
