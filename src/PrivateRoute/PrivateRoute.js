import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { users } = useAuth();
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => users.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />

                }
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;