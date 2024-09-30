import { useContext } from "react";
import { userContext } from "./UserContext";
function User() {
  const user = useContext(userContext);
  const handleLogin = () => {
    if (user) {
      user.setUser({
        name: "anjali",
        email: "anjali@gmail.com",
      });
    }
  };
  const handleLogout = () => {
    if (user) {
      user.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is :{user?.user?.name} </div>
      <div>User mail is :{user?.user?.email}</div>
    </div>
  );
}

export default User;
