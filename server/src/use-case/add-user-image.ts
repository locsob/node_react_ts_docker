import {UUid} from "../utils/uuid/uuid-generator";
import {getSystemDateTime} from "../utils/date/date-time";
import {addImage} from "../model/user-image-gateway";

interface Command {
    name: string,
    userId: UUid
}

export const addUserImage = async (command: Command): Promise<any> => {
    const dateTime = getSystemDateTime();

    const userImage = addImage();
}