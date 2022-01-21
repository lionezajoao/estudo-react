const MongoClient = require("mongodb").MongoClient;
require('dotenv').config({path: './.env'});

class Database {

    dbUrl = process.env.DBLOCAL

    async connect () {
        this.client = new MongoClient(this.dbUrl)
        await this.client.connect()
        const db = this.client.db('banking')
        return db
    }

    async insert (collection, data) {

        const db = await this.connect();
        console.log(db);
        const coll = db.collection(collection);
        coll.insertOne(data);
        db.close;


    }
}

module.exports = new Database();