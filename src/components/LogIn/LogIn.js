import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
const auth = getAuth(app);
const LogIn = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      {!user && (
        <div>
          <h1>Please Login</h1>
          <div style={{ margin: "20px" }}>
            <button onClick={handleGoogleSignIn}>SignIn with Google</button>
          </div>
          <form>
            <input type="email" placeholder="Enter Your Email" />
            <br />
            <input type="password" name="" id="" placeholder="Enter Password" />
            <br />
            <br />
            <input type="submit" value="LogIn" />
          </form>
        </div>
      )}
      {user && <h1>Succesfully logged in</h1>}
    </div>
  );
};

export default LogIn;
