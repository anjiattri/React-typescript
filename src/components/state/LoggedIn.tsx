import React, { useState } from "react";

function LoggedIn() {
  let [isLoggedIn, setIsloggedIn] = useState(false);
  const handleLogin = () => {
    setIsloggedIn(true);
  };
  const handleLogout = () => {
    setIsloggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
}

export default LoggedIn;
