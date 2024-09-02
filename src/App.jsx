import "./App.css";
import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import friends from "./friends.json";
import { FriendList } from "./components/FriendList/FriendList";
import transactions from "./transactions.json";
import { TransactionHistoryList } from "./components/TransactionHistory/TransactionHistoryList";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistoryList transactions={transactions} />
    </>
  );
};
export default App;
