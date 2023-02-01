import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h1>Showing for {user? user.displayName : 'Only you'}</h1>
        </div>
    );
};

export default Products;