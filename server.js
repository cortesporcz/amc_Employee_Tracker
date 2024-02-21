const inquirer =
const mysql =

// create a MYsql connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306, 
    user: "root",
    password: "",
})