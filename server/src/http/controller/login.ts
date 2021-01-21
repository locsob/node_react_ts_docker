import {RequestHandler} from "express";
import {BaseResponse} from "../types";
import {login, LoginCommand} from "../../use-case/login";

export const loginAction: RequestHandler<unknown, BaseResponse<boolean>, LoginCommand> = async (req, res) => {
    const command = req.body;

    const result = await login(command);

    const resp: BaseResponse<boolean> = {
        success: true,
        data: result,
    }

    res.cookie('loggedInEmail', req.user.email)
    res.json(resp);
}
