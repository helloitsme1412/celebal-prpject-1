import React from 'react';
import './userProfile.css';
const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
    </div>
  );
};

export default UserProfile;
