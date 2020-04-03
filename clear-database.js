/*
removes all data from specificed database. 
run the script with the following command: mongo --eval 'var password="<password>"; var database="<database name>"' clear-database.js 
*/

// Connect to database on remote mongo
var db = connect("mongodb+srv://admin:" + password + "@cluster0-4sm65.mongodb.net/" + database + "?retryWrites=true&w=majority"); 

// Remove all data in each collection
db.getCollectionNames().forEach(function(collectionName) {
    db[collectionName].remove({});
});
