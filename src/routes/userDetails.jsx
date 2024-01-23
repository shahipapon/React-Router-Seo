// UserDetails.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
  // console.log(`📌 ~ UserDetails ~ match:`, match);
  const params = useParams();



  const [user, setUser] = useState(null);
  const userId = params.userId;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?seed=${userId}`);
        const userData = await response.json();
        setUser(userData.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <div className="user-card"> */}
      <img src={user.picture.large} alt={`Avatar of ${user.name.first} ${user.name.last}`} />
     
    {/* </div> */}
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p>Email: {user.email}</p>
      <p>Location: {user.location.city}, {user.location.country}</p>
      <Link to="/React-Router-Seo/users">
        <button>Back to Users</button>
      </Link>
    </div>
  );
};

export default UserDetails;
