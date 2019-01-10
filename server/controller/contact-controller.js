const contactDao = require('../dao/contact-dao');

class contactController{
    //get all contacts
    getAllContacts(req, res, next){
        console.log('At the start of function getAllUsers in userController');        
        contactDao.getAllContacts().then((users) => {
            res.data = users;
            next();
        },(err) => {
            res.err = err;
            next();
        });
    }
    
    //add new contact
    addContact(req, res, next){
        console.log("inside addContact function in contactController");
        contactDao.addContact(req).then((data) => {
            res.data = data;
            console.log("contact added successfully through addContact() in contactController");
            next();
        }, (err) => {
            res.err = err;
            console.log("add contact failed in addContact() in contactController");
            next();
        });
    }

    //delete contacts
    deleteContacts(req, res, next){
        console.log("inside deleteContact function in contactController");
        contactDao.deleteContacts(req).then((data) => {
            res.data = data;
            console.log("contacts deleted successfully through deleteConacts() in contactController");
            next();
        }, (err) => {
            res.err = err;
            console.log("delete contacts failed in deleteContacts() in contactController");
            next();
        });
    }

    //update a contact
    updateContact(req, res, next){
        console.log("inside updateContact function in ContactController");
        contactDao.updateContact(req).then((data) => {
            res.data = data;
            console.log("contact updated successfully through updateContact in ContactController");
            next();
        }, (err) => {
            res.err = err;
            console.log("update contact failed in updateContact() in ContactController");
            next();
        });
    }

    /**
     * get a contact detail
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getContactDetail(req, res, next){
        console.log("inside getContactDetail function in ContactController");
        contactDao.getContactDetail(req).then((data) => {
            res.data = data;
            console.log("Contact detail retreived successfully through getContactDetail in ContactController");
            next();
        }, (err) => {
            res.err = err;
            console.log("retreival of contact detail failed in getContactDetail() in ContactController");
            next();
        });
    }
}

module.exports = new contactController;