import {createContext, FC} from 'react';


export interface LoggedInUser {
    email: string,
    isLoggedIn: true
}

interface GuestInUser {
    isLoggedIn: false
}

export interface GeneralUserData {
    login: (email: LoggedInUser['email']) => void,
    logout: () => void,
}

export type UserContext = (LoggedInUser | GuestInUser) & GeneralUserData;

export const UserContext = createContext<UserContext>({
    isLoggedIn: false,
    login: () => null,
    logout: () => null
});

export const UserContextProvider = UserContext.Provider;
