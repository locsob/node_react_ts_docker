import {Express} from "express";
import {helloAction} from "../controller/hello";
import {signupAction} from "../controller/signup";
import {loginAction} from "../controller/login";
import passport from "passport";
import {logoutAction} from "../controller/logout";
import {loadImage} from "../controller/load-image";
import multer from 'multer'
import {getFileName} from "../../utils/file/filename";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './cdn/images/')
    },
    filename: function (req, file, cb) {
        cb(null, getFileName(file))
    }
})

const upload = multer({
    // dest: './cdn/images/'
    storage
});

export const register = (app: Express): void => {
    // app.get('/', passport.authenticate('local'), helloAction);
    app.get('/', helloAction);
    app.post('/signup', signupAction);
    app.post('/login', passport.authenticate('local'), loginAction);
    app.post('/logout', logoutAction);
    // app.post('/load-image', upload.fields([{name: 'file', maxCount: 1}]),  loadImage);
    app.post('/load-image', upload.single('file'),  loadImage);
}
