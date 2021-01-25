import React, {ComponentType, FC, Component, useContext} from 'react';
import {UserContext} from "../../context/user";
import {Redirect, Route} from "react-router-dom";
import {RouteProps} from "react-router";

type Props = RouteProps;

const PrivateRoute: FC<Props> = (props) => {
    const {isLoggedIn} = useContext(UserContext);


    if (isLoggedIn) {
        return <Route {...props}/>
    }

    const RedirectComponent = () => <Redirect to="/login" />;
    return <Route {...props} component={RedirectComponent}/>
};

export default PrivateRoute;
