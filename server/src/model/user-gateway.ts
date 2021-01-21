import {initDb} from "../db/connection";
import {UUid} from "../utils/uuid/uuid-generator";
import {StringHash} from "../utils/crypto/string-hash";
import {Collection, Db} from "mongodb";

export interface User {
    id: UUid,
    email: string,
    passwordHash: StringHash,
}

interface DbUser {
    id: string,
    email: string,
    passwordHash: string,
}

async function users(): Promise<Collection<DbUser>> {
    const db = await initDb()

    return db.collection<DbUser>('users');
}

export const createUser = async (id: UUid, email: string, passwordHash: StringHash): Promise<User> => {
    const user: User = {
        id,
        email,
        passwordHash
    }

    const userCollection = await users();
    const res = await userCollection.insertOne(toDb(user));

    return user;
}

export const findUserByEmail = async (email: string): Promise<User|null> => {
    const userCollection = await users();

    const result = await userCollection.findOne({
        email: email
    })

    if (result === null) {
        return null;
    }

    return fromDb(result);
}

export const findUserById = async (id: UUid): Promise<User|null> => {
    const userCollection = await users();

    const result = await userCollection.findOne({
        id: id.value
    })

    if (result === null) {
        return null;
    }

    return fromDb(result);
}


const toDb = (user: User): DbUser => {
    return {
        id: user.passwordHash.value,
        email: user.email,
        passwordHash: user.passwordHash.value,
    }
}

const fromDb = (user: DbUser): User => {
    return {
        id: {value: user.id},
        email: user.email,
        passwordHash: {value: user.passwordHash},
    }
}
