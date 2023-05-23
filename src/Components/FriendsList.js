import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get('http://localhost:9000/api/friends', {
      headers: {
        authorization: token
      }
    })
    .then(res => {
      setFriends(res.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div className='add-friend'>
      <h2>FriendsList</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
        ))}
      </ul>
    </div>
  );
}
