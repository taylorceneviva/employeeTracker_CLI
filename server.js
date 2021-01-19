const mysql = require("mysql");
const inquirer = require("inquirer");
//const cTable = require('console.table');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "tc472215#",
  database: "employeeTracker_db"
});

connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    
});

function createPrompt() {
    inquirer.prompt([
    {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: ["View All Employees", "View Employees By Role","View Empolyees By Deparment","Add Employee","Add Role","Add Department", "Update Employee Role"]
    },
])
}

createPrompt();