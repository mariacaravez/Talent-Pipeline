/* db.js file */

/*
 const mysql = require('mysql');

 const connection = mysql.createConnection({
    host: '',
    user: 'csc648848sp21t6',
    password: 'theWayitWorks@SP21',
    database: 'csc648848db'
 })

 connection.connect(function(err){
   if(err) throw err;
 });
*/

// Current Code:
module.exports = {
  client: 'mysql',
  connection: {
    user: 'csc648848sp21t6',
    password: 'theWayitWorks@SP21',
    database: 'csc648848db'
  }
 }