import './App.css'
import React, { useState } from 'react';
import LoginForm from './login';
import UserProfile from './userProfile';


const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      {user ? (<UserProfile user={user} />) : (
        <div  className='after_login'>
        <LoginForm handleLogin={handleLogin}/>
        </div>
      )}
    </div>
  );
};

export default App;
