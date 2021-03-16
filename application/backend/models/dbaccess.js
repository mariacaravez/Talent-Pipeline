//
// database connection
//

const mysql = require("mysql");
const dbConfig = require("../configs/dbconfig.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) {
	 console.log(error);
  }
  else {	   
     console.log("Successfully connected to the database.")
  };
});

// make connection accessible from other modules
module.exports = connection;