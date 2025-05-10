import { MongoClient } from 'mongodb';

const uri = process.env.MONGODBURI;
const client = new MongoClient(uri);
const dbName = 'ghostsku';

export async function getDB() {
    if (!client.topology || !client.topology.isConnected()) {
        await client.connect();
    }
    return client.db(dbName);
}
