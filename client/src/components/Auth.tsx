import React, { FC, useContext } from 'react';
import {UserContext} from "../context/user";
import {Link} from "react-router-dom";
import {BaseResponse, post} from "../utils/http-client";

interface OwnProps {}

type Props = OwnProps;

const Auth: FC<Props> = () => {
    const userData = useContext(UserContext);
    const {isLoggedIn} = userData;

    const logout = async () => {
        const response = await post<BaseResponse<boolean>>('logout', {});

        if (response.success) {
            userData.logout();
        }
    }

    const loggedInRender = () => {
        const email = userData.isLoggedIn ? userData.email : '';

        return <div>
            <div>{email}</div>
            <button onClick={logout}>Logout</button>
        </div>;
    };

    const anonUserRender = () => {
        return <nav>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </nav>
    }

    return (
        isLoggedIn
        ? loggedInRender()
        : anonUserRender()
    );
};

export default Auth;
