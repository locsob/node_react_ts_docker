import {UUid} from "../utils/uuid/uuid-generator";
import {StringHash} from "../utils/crypto/string-hash";
import {Collection} from "mongodb";
import {initDb} from "../db/connection";
import {DateTime, parse} from "../utils/date/date-time";
import {User} from "./user-gateway";

export interface UserImage {
    userId: UUid,
    imageName: string,
    dateTime: DateTime,
}

interface DbUserImage {
    user_id: string,
    image_name: string,
    date_time: string,
}

async function images(): Promise<Collection<DbUserImage>> {
    const db = await initDb()

    return db.collection<DbUserImage>('user_images');
}

export const addImage = async (id: UUid, name: string, dateTime: DateTime): Promise<UserImage> => {
    const userImage: UserImage = {
        userId: id,
        dateTime: dateTime,
        imageName: name
    }

    const collection = await images();

    const res = await collection.insertOne(toDb(userImage));

    return userImage;
}

const toDb = (data: UserImage): DbUserImage => {
    return {
        user_id: data.userId.value,
        date_time: data.dateTime.value,
        image_name: data.imageName,
    }
}

const fromDb = (data: DbUserImage): UserImage => {
    return {
        imageName: data.image_name,
        dateTime: parse(data.date_time),
        userId: {value: data.user_id}
    }
}
