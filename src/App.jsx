// import logo from './logo.svg';
import "./App.css";

import Profile from "./components/user/Profile";
import user from "./path/user.json";

import Statistics from "./components/statistics/Statistics";
import data from "./path/data.json";

import FriendList from "./components/friendList/FriendList";
import friends from "./path/friends.json";

import TransactionHistory from "./components/transaction/TransactionHistory";
import transactions from "./path/transactions.json";
console.log(friends);
function App() {
  return (
    <div className="App">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
