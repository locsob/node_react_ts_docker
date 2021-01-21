import {hash, compare} from "bcrypt";
import {UUid} from "../uuid/uuid-generator";
import {promisify} from 'util';

export interface StringHash {
    readonly value: string
}

export const stringHash = async (string: string): Promise<StringHash> => {
    const passHash = await hash(string, 10);

    return {
        value: passHash
    };
}

export const isValidPass = async (string: string, hash: StringHash): Promise<boolean> => {
    return compare(string, hash.value);
}
