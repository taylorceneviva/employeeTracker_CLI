const mysql = require("mysql");
const inquirer = require("inquirer");
//const consoleTable = require('console.table');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "tc472215#",
  database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //console.log("connected!");
    createPrompt();
});

function createPrompt() {
        inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: ["View All Employees", "View Employees By Role","View Empolyees By Deparment","Add Employee","Add Role","Add Department", "Update Employee Role"]
        }
    ]).then(function(response) {
    switch(response.choice) {
        case "View All Employees":
            allEmployees();
            break;
        case "View Employees By Role":
            byRole();
            break;
        case "View Empolyees By Deparment":
            byDepartment();
            break;  
        case "Add Employee":
            addEmployee();
            break;       
        case "Add Role":
            addRole();
            break;        
        case "Add Department":
            addDepartment();
            break;  
        case "Update Employee Role":
            updateRole();
            break;
        default:
            break;
    }
    })   

};


function allEmployees(){
    
    
    function(err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
  }

}

function byRole() {

}

function byDepartment() {

}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter employee's first name.",
            name: "firstName",
        },
        {
            type: "input",
            message: "Enter employee's last name.",
            name: "lastName",
        },
        {
            type: "input",
            message: "Enter employee's department.",
            name: "department",
        }
    )};


function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter employee's role.",
            name: "newRole"
        },
        {
            type: "input",
            message: "Enter employee's salary.",
            name: "salary"
        }
}

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter new department Namee",
            name: "newDepartment"
        },
}


function updateRole() {

}

