const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    console.log('connection start');
    return MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) {
            console.log('jitendra');
            return console.log(err);
        }

        closure(client.db('contactList'));
        client.close();
    });
};

module.exports = connection;