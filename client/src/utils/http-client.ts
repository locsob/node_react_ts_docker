import {serverAddress} from "./server";

interface BaseErrorResponse {
    success: false,
    error: string
}

interface BaseSuccessResponse<T extends object> {
    success: true,
    data: T
}

export type BaseResponse<T> = BaseSuccessResponse<any> | BaseErrorResponse;


export const get = async <T extends object>(path: string): Promise<BaseResponse<T>> => {
    const response = await fetch(getUrl(path), {
        method: 'get',
        credentials: 'include',
    });

    const data = await response.json() as undefined as BaseResponse<T>;

    return data;
}

export const post = async <T>(path: string, bodyData: object): Promise<BaseResponse<T>> => {
    const response = await fetch(getUrl(path), {
        method: 'post',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    });

    const data = await response.json() as undefined as BaseResponse<T>;

    return data;
}

const getUrl = (path: string): string => {
    return `${serverAddress}/${path}`;
}
