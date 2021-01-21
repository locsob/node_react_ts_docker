import {RequestHandler} from "express";
import {BaseResponse} from "../types";

export const logoutAction: RequestHandler = (req, res) => {
    req.logOut();

    const resData: BaseResponse<boolean> = {
        data: true,
        success: true
    }



    res.json(resData);
}
