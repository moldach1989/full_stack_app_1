const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_RL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: 'localhost',
        user:'root',
        password: 'Macademia01',
        database: 'burgers_db'
    });
};

connection.connect((err) => {
    if (err){
        console.error( `error connecting: ${err.stack}`);
        return;
    }
    console.log("connected as id " + connection.threatID);
});

module.exports = connection;