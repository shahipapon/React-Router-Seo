// UserCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.picture.large} alt={`Avatar of ${user.name.first} ${user.name.last}`} />
      <div className="user-details">
        <h2>{`${user.name.first} ${user.name.last}`}</h2>
        <p>Email: {user.email}</p>
        <p>Location: {user.location.city}, {user.location.country}</p>
        <Link to={`/React-Router-Seo/user/${user.login.uuid}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
