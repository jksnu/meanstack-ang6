const dbConnectionApi = require('../dbconnection/db-connnection-api');
var ObjectID = require('mongodb').ObjectID;

class contactDao{
    //get all contacts
    getAllContacts(){
        return new Promise((resolve, reject) => {
            dbConnectionApi((db) => {
                db.collection('contactList')
                    .find()
                    .toArray()
                    .then((users) => {
                        console.log('get all users request completed in getAllUsers in userDao');
                        resolve(users);
                    })
                    .catch((err) => {
                        console.log('Error in function getAllUsers in userDao');
                        reject(err);
                    });
            });
        });        
    }
    
    //add new contact
    addContact(req){
        console.log("inside addContact function in contactDao");
        return new Promise((resolve, reject) => {
            dbConnectionApi((db) => {
                db.collection('contactList').insertOne(req.body, (err, result) => {
                    if(err){
                        console.log("Insert contact failed in addContact function in ContactDao");
                        reject(err);
                    }else{
                        console.log("Insert contact success in addContact function in ContactDao");
                        resolve(result);
                    }
                });
            });
        });
    }

    //delete contacts
    deleteContacts(req){
        console.log("inside deleteContacts function in contactDao");
        return new Promise((resolve, reject) => {
            dbConnectionApi((db) => {
                let idList = [];
                for(let i=0; i<req.body.length; i++){
                    idList.push(ObjectID(req.body[i].id));
                }
                let deleteQuery = {_id: {$in: idList}};
                db.collection('contactList').deleteMany(deleteQuery, (err, result) => {
                    if(err){
                        console.log("delete contacts failed in deleteContacts function in ContactDao");
                        reject(err);
                    }else{
                        console.log("delete contact success in deleteContacts function in ContactDao");
                        resolve(result);
                    }
                });
            });
        });
    }

    //update a contact
    updateContact(req){
        console.log("inside updateContact function in ContactDao");
        return new Promise((resolve, reject) => {
            dbConnectionApi((db) => {
                let query = {_id: ObjectID(req.body._id)};
                let setField = {$set:{
                    userId: req.body.userId,
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    address: req.body.address,
                    income: req.body.income,
                    modifiedDate: req.body.modifiedDate
                }}
                db.collection('contactList').updateOne(query, setField, {}, (err, result) => {
                    if(err){
                        console.log("Update contact datails failed in updateContact function in ContactDao");
                        reject(err);
                    } else{
                        console.log("Update contact details success in updateContact function in ContactDao");
                        resolve(result);
                    }
                })
            });
        });
    }

    /**
     * get a contact detail
     * @param {*} req 
     */
    getContactDetail(req){
        console.log("inside getContactDetail function in ContactDao");
        return new Promise((resolve, reject) => {
            dbConnectionApi((db) => {
                let query = {"_id": ObjectID(req.params.id)};
                db.collection('contactList').findOne(query, (err, result) => {
                    if(err){
                        console.log("get contact datails failed in getContactDetail function in ContactDao");
                        reject(err);
                    } else{
                        console.log("get contact details success in getContactDetail function in ContactDao");
                        resolve(result);
                    }
                });
            });
        });
    }
}

module.exports = new contactDao;