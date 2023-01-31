import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h1>Please Login</h1>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>SignIn with Google</button>
            </div>
            <form>
                <input type="email" placeholder='Enter Your Email' /><br />
                <input type="password" name="" id=""  placeholder='Enter Password'/><br /><br />
                <input type="submit" value="LogIn" />
            </form>
        </div>
    );
};

export default LogIn;