var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "tc472215#",
  database: "employeeTracker_db"
});

connection.connect(err => {

    if (err) throw err;
    console.log("connected!");

});