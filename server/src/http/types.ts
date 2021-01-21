import {User as AppUser} from '../model/user-gateway';

interface BaseErrorResponse {
    success: false,
    error: string
}

interface BaseSuccessResponse<T extends object> {
    success: true,
    data: T
}

export type BaseResponse<T> = BaseSuccessResponse<any> | BaseErrorResponse;

declare global {
    namespace Express {
        interface Request {
            user?: AppUser;
        }
    }
}
