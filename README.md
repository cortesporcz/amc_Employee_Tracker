# amc_Employee_Tracker
Content management system interface
## Description
This application allows the user to manage and maintain a database of information with tools to View Departments, Roles, and Employees. User can also Add a Department, Role, Employee, or Manager. User can also Update an Employee Role, Delete a Department/Role/Employee, and view the total budget of a given department."

## Installation
Clone the repository, navigate to the approriate directory in your CLI (the one containing server.js), and install the dependencies by typing "npm i" into your command line.

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business.

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database.

## Mock-Up

https://github.com/cortesporcz/amc_Employee_Tracker
https://drive.google.com/file/d/1JoDVWCSCqMpHYeZ4enKIoUez0JiqKa_d/view



## Getting Started
You'll need to use the MySQL2 package to connect to your MySQL database and perform queries, and the Inquirer package to interact with the user via the command line.

## Important
In order to install inquirer, please use npm i inquirer@8.2.4.

## Credits and Resources
UTSA peers, especially Joshua Hale's mysql help to get the mysql errors fixed. Other credits include: https://www.youtube.com/watch?v=m9CQxR0AfiQ (used just to get started)