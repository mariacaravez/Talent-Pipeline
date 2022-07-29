 const mysql = require('mysql');

 const connection = mysql.createConnection({
    host: '',
    user: 'csc648848sp21t6',
    password: 'theWayitWorks@SP21',
    database: 'csc648848db'
 })

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});


/* ORIGINAL CODE*/
// module.exports = {
//   client: 'mysql',
//   connection: {
//     user: 'csc648848sp21t6',
//     password: 'theWayitWorks@SP21',
//     database: 'csc648848db'
//   }
//  }