import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../pages/Loading';

const withoutAuth = (Component) => {
    const Auth = (props) => {
        const [user, loading] = useAuthState(auth);

        if (loading) return <Loading />;

        const token = user || localStorage.getItem('token');

        if (!token) {
            return <Component {...props} />;
        } else {
            return <Navigate to="/" />;
        }
    };

    return Auth;
};

export default withoutAuth;
