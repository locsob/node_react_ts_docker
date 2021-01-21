import React, {FC, Fragment, useState} from 'react';
import Header from "../components/Header";
import {serverAddress} from "../utils/server";
import {get} from "../utils/http-client";

interface OwnProps {}

type Props = OwnProps;

const Hello: FC<Props> = (props) => {
    const [text, setText] = useState('No response');

    const sendRequest = async () => {
        setText('waiting...');

        try {
            // const response = await fetch(serverAddress);
            const response = await get<{ text: string }>('');

            if (response.success) {
                const text = response.data;
                setText(text);
                return;
            }

        } catch (e) {
            setText(`Error ${e.message}`)
        }
    }

    return <div>
        <Header/>
        <div>
            <button onClick={sendRequest}>Try!</button>
            <div>{text}</div>
        </div>
    </div>
};

export default Hello;
