import {RequestHandler} from "express";
import {BaseResponse} from "../types";
import {createWriteStream} from 'fs';
import {getFileName} from "../../utils/file/filename";

interface Body {
    name: string
}

export const loadImage: RequestHandler<undefined, BaseResponse<boolean>, Body> = (req, res) => {
    // let files = req.files as undefined as {file: Express.Multer.File[]};
    const file = req.file;

    const name = getFileName(file);


    const resp: BaseResponse<boolean> = {
        data: true,
        success: true
    }

    res.json(resp);
}