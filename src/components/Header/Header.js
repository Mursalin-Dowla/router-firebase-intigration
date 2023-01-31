import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, unRegister } = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/signup">SignUp</Link>
        <span>{user?.displayName && user.displayName+' ' }</span>
        {user?.uid ? <button onClick={unRegister}>Sign Out</button> : <Link to="/login">LogIn</Link>}
      </nav>
    </div>
  );
};

export default Header;
