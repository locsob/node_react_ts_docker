import {isValidPass, stringHash} from "../utils/crypto/string-hash";
import {findUserByEmail, User} from "../model/user-gateway";
import passport from 'passport';
import {VerifyFunction} from "passport-local";

export interface LoginCommand {
    email: string,
    password: string
}

export const login = async (command: LoginCommand): Promise<User|null> => {
    const hash = await stringHash(command.password);

    const user = await findUserByEmail(command.email);

    const isValid = await isValidPass(command.password, user.passwordHash);
    if (user && isValid) {
        return user;
    }

    return null;
}


export const loginVerify: VerifyFunction = async (username, password, done) => {

    try {
        const user = await findUserByEmail(username);

        if (!user) {
            return done(null, false, {message: 'Invalid credentials'})
        }


        const isValid = await isValidPass(password, user.passwordHash);

        if (!isValid) {
            return done(null, false, {message: 'Invalid credentials'})
        }

        return done(null, user);
    } catch (e) {
        return done(e.message);
    }

}
