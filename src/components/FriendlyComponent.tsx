import { observer, useObservable } from "mobx-react-lite";
import * as React from "react";

export const FriendlyComponent = observer(() => {
  const friendNameRef: any = React.useRef();
  const data: any = useObservable({
    friends: [] as string[],
    addFriend(favorite: boolean = false) {
      if (favorite === true) {
        data.friends.unshift(friendNameRef.current.value + " * ");
      } else {
        data.friends.push(friendNameRef.current.value);
      }
      friendNameRef.current.value = "";
    },
    get friendsCount() {
      return data.friends.length;
    }
  });

  return (
    <div>
      <b>Count of friends: {data.friendsCount} </b>
      {data.friends.map((friend: any) => (
        <div>{friend}</div>
      ))}
      <br />
      <input ref={friendNameRef} />
      <button onClick={data.addFriend}>Add friend </button>
      <button onClick={() => data.addFriend(true)}>Add favorite friend</button>
    </div>
  );
});
