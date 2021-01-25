import {useState} from "react";

interface FormData {
    email: string,
    password: string,
}

interface FormState extends FormData {
    disabled: boolean
}

interface CredentialsFormHook {
    changeValue: (key: keyof FormData, value: string) => void,
    formData: FormState,
    send: () => void
}

interface SendData {
    sendData: () => any
}

export const useCredentialsForm = (sendData: SendData): CredentialsFormHook => {
    const [formState, setFormState] = useState<FormState>({
        disabled: true,
        email: '',
        password: ''
    });

    const changeValue = (key: keyof FormData, value: string) => {
        const anotherKey = key === 'email' ? 'password' : 'email';
        const anotherValue = formState[anotherKey];

        setFormState({
            ...formState,
            [key]: value,
            disabled: value.length === 0 || anotherValue.length === 0
        });
    };

    const send = () => {
        setFormState({
            ...formState,
            disabled: true
        });

        sendData.sendData()
    }

    return {
        changeValue,
        formData: formState,
        send
    }
}