-- Drop the database if it exists
DROP DATABASE IF EXISTS employeeTracker_db;

-- Create the database
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

-- Create tables
CREATE TABLE employee (
    
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR (30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES manager(id)

);

CREATE TABLE department (
    
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
    
);

CREATE TABLE role (
    
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);


