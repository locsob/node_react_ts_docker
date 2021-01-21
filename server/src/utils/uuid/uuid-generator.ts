import {uuid} from 'uuidv4';

export interface UUid {
    readonly value: string
}

type UuidGenerator = () => UUid;

export const uuidGenerator: UuidGenerator = () => {
    return {
        value: uuid()
    }
}
