import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/todos';
const MONGO_DB = process.env.MONGO_DB || 'todos';

let db = null;
let collection = null;
export default class DB {
    connect() {
        return MongoClient.connect(MONGO_URI)
            .then(function (client) {
                db = client.db(MONGO_DB);
                collection = db.collection('todos');
            })
    }

    queryAll() {
        return collection.find().toArray();
    }

    queryById(id) {
        // TODO: Implement queryById
        return collection.find({id: id}).toArray();
    }

    update(id, order) {
        // TODO: Implement update
        return collection.update({id: id}, order);
    }

    delete(id) {
        // TODO: Implement delete
        return collection.deleteOne({id: id});
    }

    insert(order) {
        // TODO: Implement insert
        return collection.insertOne(order);
    }
}
