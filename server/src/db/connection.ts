import {Db, MongoClient} from 'mongodb';

let db: Promise<Db>|null = null;

export const initDb = (): Promise<Db> => {
    if (db !== null) {
        return db;
    }

    db = getDb();

    return db;
}

const getDb = async (): Promise<Db> => {
    const connection = await MongoClient.connect('mongodb://root:pass@db:27017');
    // const connection = await MongoClient.connect('mongodb://root:pass@localhost:27017/node-first');

    return connection.db('node-first');
}
