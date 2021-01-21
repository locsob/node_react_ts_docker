import {RequestHandler} from "express";
import {signup, SignupCommand} from "../../use-case/signup";
import {BaseResponse} from "../types";

export const signupAction: RequestHandler<unknown,BaseResponse<boolean>, SignupCommand> = (req, res) => {
    const data = req.body;

    signup(data);

    res.json({
        data: true,
        success: true
    })
}
