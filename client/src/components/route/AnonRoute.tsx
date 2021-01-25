import React, {FunctionComponent, useContext} from 'react';
import {UserContext} from "../../context/user";
import {Redirect, Route} from "react-router-dom";
import {RouteProps} from 'react-router';

type Props = RouteProps;

const AnonRoute: FunctionComponent<Props> = (props) => {
    const {isLoggedIn} = useContext(UserContext);


    if (isLoggedIn) {
        const RedirectComponent = () => <Redirect to="/" />;
        return <Route {...props} component={RedirectComponent}/>
    }

    return <Route {...props}/>
};

export default AnonRoute;
