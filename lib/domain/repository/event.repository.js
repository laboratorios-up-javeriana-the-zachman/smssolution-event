const database = require("../database/config.MYSQL");
const table_event = "`smssolution-event`.event";

async function create(event) {
    try {
        // Abrir conexion a la base de datos
        let connection = await database.getConnection();
        let result = await new Promise((resolve, reject) => {

            let query = `insert into ${table_event} (id, user_id, date, date_created, date_last_execution, campaing_id,
            date_next_execution, state)
            values ('${event.id}', '${event.user_id}', '${event.date}', '${event.date_created}', '${event.date_last_execution}', 
                '${event.campaign.campaign_id}', '${event.date_next_execution}', ${event.state})`;

            connection.query(query,
                async function (error, result) {
                    if (error) {
                        console.log(`Error executin query in table ${table_event} error ${error} `);
                        return reject(false);
                    }
                    if (result.affectedRows > 0) {
                        return resolve(true);
                    }
                });
        });

        return result;

    } catch (error) {
        return [];
    } finally {
        database.getClose();
    }
}

async function select(date) {
    try {
        // Abrir conexion a la base de datos
        let connection = await database.getConnection();
        let result = await new Promise((resolve, reject) => {

            let query = `select id, user_id, date, date_created, date_last_execution, campaing_id, date_next_execution, state
            from  ${table_event}
            where date_next_execution <= '${date}';`;

            connection.query(query,
                async function (error, result) {
                    if (error) {
                        console.log(`Error executin query in table ${table_event} error ${error} `);
                        return reject([]);
                    }
                    if (result.affectedRows > 0) {
                        return resolve(result);
                    }
                });
        });

        return result;

    } catch (error) {
        return [];
    } finally {
        database.getClose();
    }
}

module.exports = {
    create,
    select
};