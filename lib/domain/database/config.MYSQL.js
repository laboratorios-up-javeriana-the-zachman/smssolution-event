const mysql = require("mysql");
const enviroment = require("../../infraestructure/config/enviroment");

let connection;

const dbConnection = () => {
    const host_ = enviroment.database.host;
    const port_ = enviroment.database.port;
    const user_ = enviroment.database.user;
    const password_ = enviroment.database.password;
    const database_ = enviroment.database.database;
    const url = 'mysql://' + user_ + ':' + password_ + '@' + host_ + ':' + port_ + '/' + database_;

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