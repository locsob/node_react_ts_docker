import React, {FC, useContext, useState} from 'react';
import Header from "../components/Header";
import {post} from "../utils/http-client";
import {UserContext} from "../context/user";
import {Redirect} from 'react-router-dom';
import {useCredentialsForm} from "../hook/credentials-form";

interface OwnProps {}

type Props = OwnProps;

const Login: FC<Props> = () => {
    const loginRequest = async () => {
        try {
            const response = await post<boolean>('login', {email, password});

            if (response.success && response.data) {
                login(email)
            }
        } catch (e) {
            console.log(e.message);
        }
    }


    const {login, isLoggedIn} = useContext(UserContext);
    const {formData, changeValue} = useCredentialsForm({
        sendData: loginRequest
    });

    const {email, password, disabled} = formData;


    if (isLoggedIn) {
        return <Redirect to="/" />
    }

    return <div>
        <Header/>
        <div>
            <label>
                Email
                <input
                    type="text"
                    value={email}
                    onChange={e => changeValue('email', e.target.value)}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={e => changeValue('password', e.target.value)}
                />
            </label>
            <input
                type="submit"
                value="Login"
                disabled={disabled}
                onClick={loginRequest}
            />
        </div>
    </div>
};



export default Login;
