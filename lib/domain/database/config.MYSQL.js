const mysql = require("mysql");

let connection;

const dbConnection = () => {
    const host_ = "smssolution-event.cx4ce6fvtuaw.us-east-2.rds.amazonaws.com";
    const user_ = "admin";
    const password_ = "Gs_Qwerty01*"; 
    const database_ = "smssolution-event";
    const url = 'mysql://' + user_ + ':' + password_ + '@' + host_ + '/' + database_;

    connection = mysql.createConnection(url);
}

const getConnection = async() => {
    try {
        dbConnection();
        await new Promise((resolve, reject) => {
            connection.connect(err => {
                return err ? reject(err) : resolve(connection)
            })
        })
    } catch (error) {
        throw new Error(`Error connecting to DataBase ${error}`);
    }

    return connection;
}

const getClose = () => {
    connection.end(function() {});
}

module.exports = {
    dbConnection,
    getConnection,
    getClose
}