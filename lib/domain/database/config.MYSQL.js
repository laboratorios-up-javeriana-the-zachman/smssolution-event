const mysql = require("mysql");

let connection;

const dbConnection = () => {
    const host_ = "34.174.158.138:3306";
    const user_ = "root";
    const password_ = "1016034941"; 
    const database_ = "event";
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