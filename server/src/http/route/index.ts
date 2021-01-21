import {Express} from "express";
import {helloAction} from "../controller/hello";
import {signupAction} from "../controller/signup";
import {loginAction} from "../controller/login";
import passport from "passport";
import {logoutAction} from "../controller/logout";

export const register = (app: Express): void => {
    // app.get('/', passport.authenticate('local'), helloAction);
    app.get('/', helloAction);
    app.post('/signup', signupAction);
    app.post('/login', passport.authenticate('local'), loginAction);
    app.post('/logout', logoutAction);
}
