import "./friendStyles.css";

const FriendList = ({ friends }) => {
  let i = 0;
  return (
    <ul>
      <p className="my-friends">My Friends - 👬</p>
      {friends.map((friend) => {
        {
          i += 1;
        }
        return <li key={i}>{friend}</li>;
      })}
    </ul>
  );
};

export default FriendList;
