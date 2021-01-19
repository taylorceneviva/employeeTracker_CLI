USE employeeTracker_db;

INSERT INTO department (name) VALUES ("Makreting");
INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Production");
INSERT INTO department (name) VALUES ("Design");
INSERT INTO department (name) VALUES ("Finance");

INSERT INTO role (title, salary, department_id) VALUES ("Marketing Coordinator", 65000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("HR Director", 80000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Production assistant", 85000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Graphic Designer", 85000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("CFO", 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Eduardo", "Hart", 1,null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Winston", "Nicholas", 1, Null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Luke", "Cohen", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Katrina", "Hampton", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Rex", "Larson", 1, null);