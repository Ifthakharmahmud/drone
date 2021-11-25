import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Dashboard from '../Dashboard/Dashboard';

const Welcome = () => {
    const {user} = useAuth();
    return (
        <>
            
                <h2 className="text-center"> Hello, {user.displayName} </h2>
                <p className="text-center">Welcome To Dashboard</p>
            
            
        </>
    );
};

export default Welcome;