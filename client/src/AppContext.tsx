import React, {FC, Provider, useEffect, useState} from 'react';
import { HashRouter } from 'react-router-dom';
import App from "./App";
import { LoggedInUser, UserContext, UserContextProvider} from "./context/user";
import {getCookieValue} from "./utils/cookie";

interface OwnProps {}

type Props = OwnProps;

const AppContext: FC<Props> = (props) => {
    const [userState, setUserState] = useState<UserContext>({
        isLoggedIn: false,
        login: email => loginUser(email),
        logout: () => logoutUser(),
    });

    const loginUser = (email: LoggedInUser['email']) => {
        setUserState({
            ...userState,
            isLoggedIn: true,
            email
        })
    }

    const logoutUser = () => {
        setUserState({
            ...userState,
            isLoggedIn: false,
        })
    }

    useEffect(() => {
        const emailCookie = getCookieValue('loggedInEmail');

        if (emailCookie) {
            loginUser(emailCookie);
        }
    }, [])

    return <UserContextProvider value={userState}>
        <HashRouter>
            <App/>
        </HashRouter>
    </UserContextProvider>;
};

export default AppContext;
