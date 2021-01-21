import React, {FC, useState} from 'react';
import Header from "../components/Header";
import {post} from "../utils/http-client";

interface OwnProps {}

type Props = OwnProps;

interface FormData {
    email: string,
    password: string,
}

interface FormState extends FormData {
    disabled: boolean
}

const Login: FC<Props> = () => {
    const [formState, setFormState] = useState<FormState>({
        disabled: true,
        email: '',
        password: ''
    });

    const {email, password, disabled} = formState;

    const changeValue = (key: keyof FormData, value: string) => {
        const anotherKey = key === 'email' ? 'password' : 'email';
        const anotherValue = formState[anotherKey];

        setFormState({
            ...formState,
            [key]: value,
            disabled: value.length === 0 || anotherValue.length === 0
        });
    };

    const loginRequest = async () => {
        setFormState({
            ...formState,
            disabled: true
        });

        const data: FormData = {
            email,
            password
        };

        try {
            const response = await post<boolean>('login', data);
        } catch (e) {
            console.log(e.message);
        }
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
