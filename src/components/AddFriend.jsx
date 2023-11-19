import { useState, useRef } from "react";

import "./addFriendStyles.css";
const AddFriend = ({ addFriend }) => {
  const [friend, setFriend] = useState("");
  const inputRef = useRef();

  function handleChange(e) {
    setFriend(e.target.value);
  }
  return (
    <form
      onSubmit={(e) => {
        addFriend(e, friend);
        setFriend("");
        inputRef.current.focus();
      }}
    >
      <label htmlFor="name"></label>
      <input
        autoFocus
        ref={inputRef}
        onChange={handleChange}
        className="add-friend"
        type="text"
        id="name"
        value={friend}
        autoComplete="off"
        required
      />
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddFriend;
