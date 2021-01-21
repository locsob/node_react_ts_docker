import express from 'express';
import {corsMiddleware} from "./http/middleware/cors";
import {register} from "./http/route";
import bodyParser from 'body-parser';
import {initDb} from "./db/connection";
import passport from "passport";
import {Strategy} from "passport-local";
import {loginVerify} from "./use-case/login";
import session from 'express-session';
import { findUserById, User} from "./model/user-gateway";

const app = express();

initDb().then(
    () => {
        app.use(session({
            secret: 'node-first',
            resave: false,
            saveUninitialized: false,
        }));
        app.use(corsMiddleware);
        app.use(bodyParser.json());
        app.use(passport.initialize());
        app.use(passport.session());
        passport.use(new Strategy({
            usernameField: 'email',
        }, loginVerify))

        passport.serializeUser(function(user, done) {
            const appUser = user as User;
            console.log('ser', appUser);
            done(null, appUser.id.value);
        });

        passport.deserializeUser(async function(id, done) {
            console.log('des', id);

            const user = await findUserById({value: id as string})

            console.log(user);
            if (user) {
                return done(false, user)
            }

            done('Not found', null);
        });

        register(app);

        app.listen(8080, '0.0.0.0');
        console.log('listen connection')
    }
);


