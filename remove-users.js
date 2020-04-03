/*
removes all users from the specificed database.
run the script with the following command: mongo --eval 'var password="<password>"; var database="<database name>"' remove-users.js 
*/

// Connect to database on remote mongo
var db = connect("mongodb+srv://admin:" + password + "@cluster0-4sm65.mongodb.net/" + database + "?retryWrites=true&w=majority"); 

// Remove all users
db.users.remove({});

print("All Users Removed from database: " + database)
