import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import statisticData from '../src/data/statistical-data.json';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Profile />
      <Statistics title="Upload stats" stats={statisticData} />
    </div>
  );
};

export default App;