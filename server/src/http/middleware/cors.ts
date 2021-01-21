import {RequestHandler} from "express";

export const corsMiddleware: RequestHandler = (
    req,
    res,
    next
) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    next();
};
