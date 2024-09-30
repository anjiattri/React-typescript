import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
function User() {
  //   let [user, setUser] = useState<null | AuthUser>(null);
  let [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({ name: "anjali", email: "anjali@gmail.com" });
  };
  const handleLogout = () => {
    // setUser({} as AuthUser);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is : {user.name} </div>
      <div>User mail is :{user.email}</div>
    </div>
  );
}

export default User;
