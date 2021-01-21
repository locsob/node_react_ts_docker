import {createUser} from "../model/user-gateway";
import {hash} from 'bcrypt';
import {uuid} from 'uuidv4';
import {stringHash} from "../utils/crypto/string-hash";
import {uuidGenerator} from "../utils/uuid/uuid-generator";

export interface SignupCommand {
    email: string,
    password: string
}

export const signup = async (command: SignupCommand): Promise<void> => {
    const passHash = await stringHash(command.password);
    const id = uuidGenerator();

    createUser(
        id,
        command.email,
        passHash
    );
}
