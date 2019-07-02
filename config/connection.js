// Set up MySQL connection.
// var JAWSDB_URL = require("./.env")
var mysql = require("mysql");
require("dotenv").config();

var env = process.env.JAWSDB_URL
var connection;

if (env) {
  connection = mysql.createConnection(env);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "MySQLbau5!",
    database: "burgers_db"
  });
}




// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
