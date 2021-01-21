import {RequestHandler} from "express";
import {User} from "../../model/user-gateway";
import {BaseResponse} from "../types";

export const helloAction: RequestHandler = (req, res) => {
    let user = req.user as User;

    const resp: BaseResponse<string> = {
        success: true,
        data: user.email + ' Bye!'
    };
    res.json(resp);
}
