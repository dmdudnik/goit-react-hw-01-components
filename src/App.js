import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import statisticData from '../src/data/statistical-data.json';
import friendsData from '../src/data/friends.json';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Profile />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friends={friendsData} />
    </div>
  );
};

export default App;
