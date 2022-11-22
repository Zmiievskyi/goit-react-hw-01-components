// import "./App.css";


import Profile from "../user/Profile";
import user from "../../path/user.json";

import Statistics from "../statistics/Statistics";
import data from "../../path/data.json";

import FriendList from "../friendList/FriendList";
import friends from "../../path/friends.json";

import TransactionHistory from "../transaction/TransactionHistory";
import transactions from "../../path/transactions.json";

export default function App() {
  return (
    <div className="App">
      <Profile user={user}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

