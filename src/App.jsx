import { useState } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";

function App() {
  const [friends, setFriends] = useState(["Saqlain", "Shahzad"]);

  const addFriend = (e, friend) => {
    e.preventDefault();
    setFriends([...friends, friend]);
  };

  return (
    <div className="container">
      <p className="friend-list">Friends List</p>
      <AddFriend addFriend={addFriend} />
      <FriendList friends={friends} />
      <p>Developed By Saqlain Javed</p>
    </div>
  );
}

export default App;
