import { MongoClient, Db, Collection } from 'mongodb'

const uri = process.env.MONGODB_URI

if (!uri) {
    throw new Error('MONGODB_URI enviroment variable is not defined')
}

let client: MongoClient;
let db: Db

export async function connectToDatabse() {
    if (!client) {
        client = new MongoClient(uri as string)
        await client.connect()
        db = client.db('blog-app')
    }
    return { client, db }
}

export async function getBlogCollection(): Promise<Collection> {
    if (!db) {
        const { db: database } = await connectToDatabse();
        return database.collection('blog');

    }
    return db.collection('blog')

}