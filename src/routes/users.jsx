// App.js
import React, { useState, useEffect } from 'react';
import UserCard from '../components/userCard';

const Users = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const userData = await response.json();
        setUsersData(userData.results);
      } catch (error) {
        console.error('Error fetching users data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="app">
      <h1>User Cards</h1>
      <div className="user-cards-container">
        {usersData.map((user, index) => (
            
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
