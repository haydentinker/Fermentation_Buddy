import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';

export const Profile = () => {
  const { user, googleSignIn } = UserAuth();


  return (
    <div className="home">
      <button className="signIn" onClick={googleSignIn}>
        Sign In
      </button>
      <h1>Hello {user?.displayName || 'Guest'}</h1>
    </div>
  );
};
