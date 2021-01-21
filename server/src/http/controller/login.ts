import {RequestHandler} from "express";
import {BaseResponse} from "../types";
import {login, LoginCommand} from "../../use-case/login";
import passport from "passport";

export const loginAction: RequestHandler<unknown, BaseResponse<boolean>, LoginCommand> = async (req, res) => {
    const command = req.body;

    const result = await login(command);

    const resp: BaseResponse<boolean> = {
        success: true,
        data: result,
    }

    // @ts-ignore
    // res.session = { cookie: req.session.cookie }
    // res.cookie('userid', result.id.value)
    res.json(resp);
}
