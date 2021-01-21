interface BaseErrorResponse {
    success: false,
    error: string
}

interface BaseSuccessResponse<T extends object> {
    success: true,
    data: T
}

export type BaseResponse<T> = BaseSuccessResponse<any> | BaseErrorResponse;
