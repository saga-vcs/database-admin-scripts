# Database Admin Scripts

This repository containts scripts to make managing our remote mongo database easy. **Before running these scripts ensure that your IP is whitelisted by MongoDB Atlas**

## Command Line Arguments

Each command takes two command line arguments <password> and <database>. 

- <password> should be subsituted for the password of the admin Mongo Atlas account. ie: 'password123'
- <database> should be substituted for the name of the database you are attempting to access. ie: 'production' or 'test'
  
## Scripts

### remove-users.js

This script removes all users in the specified database. 

To run: ``mongo --eval 'var password="<password>"; var database="<database name>"' remove-users.js``
  
### load-fake-users.js

This script adds the following users to the specified database. 

- {username: "aarondia", email: "aarondia", password: "aarondia"}
- {username: "1", email: "1", password: "1"}
- {username: "2", email: "2", password: "2"}
- {username: "3", email: "3", password: "3"}

To run: ``mongo --eval 'var password="<password>"; var database="<database name>"' load-fake-users.js``
  
### remove-fake-users.js

This script removes the user accounts created by load-fake-users.js in the specified database.

To run: ``mongo --eval 'var password="<password>"; var database="<database name>"' remove-fake-users.js``
  
### clear-database.js

This script removes **all data** from the specified databse. 

To run: ``mongo --eval 'var password="<password>"; var database="<database name>"' clear-database.js``




  

