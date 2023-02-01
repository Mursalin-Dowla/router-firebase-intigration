import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Showing user with react hooks <br/>User: {user? user.displayName : 'Not Signed in'}</h1>
        </div>
    );
};

export default Home;