import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h1>User: {user? user.displayName : 'Not Signed in'}</h1>
        </div>
    );
};

export default Home;