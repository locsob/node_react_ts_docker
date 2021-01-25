import React, {FormEvent, FunctionComponent, useState} from 'react';
import Header from "../components/Header";
import {appFetch, BaseResponse, post} from "../utils/http-client";

interface OwnProps {}

type Props = OwnProps;

interface State {
    file: File|undefined,
    name: string|undefined
}

const LoadImage: FunctionComponent<Props> = ({}) => {
    const [state, setState] = useState<State>({file: undefined, name: undefined});

    const handleSubmit = async (e: FormEvent) => {
        const formData = new FormData();

        formData.append('file', state.file, state.name)
        formData.append('name', state.name)

        const response = await appFetch<BaseResponse<boolean>>('load-image', 'post', {
            body: formData
        });

        e.preventDefault();
    }

    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={state.name}
                        onChange={e => setState({
                            ...state,
                            name: e.target.value
                        })}
                    />
                </label>
                <label>
                    Upload
                    <input
                        type="file"
                        onChange={e => setState({
                            ...state,
                            file: e.target.files[0]
                        })}
                    />
                </label>
                <input type="submit" value="upload"/>
            </form>
        </div>
    );
};

export default LoadImage;
