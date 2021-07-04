import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import friendsData from '../src/data/friends.json';
import statisticData from '../src/data/statistical-data.json';
import transactionData from '../src/data/transactions.json';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Profile />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionData} />
    </div>
  );
};

export default App;
