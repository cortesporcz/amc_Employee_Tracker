const inquirer =
const mysql =

// create a MYsql connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    password: "",
    database: 'employee_Tracker_db',
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to the Employee Tracker database!");
    // start the application
    start();
});

