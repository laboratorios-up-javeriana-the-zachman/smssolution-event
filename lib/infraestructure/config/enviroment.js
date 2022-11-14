'use strict';

/**
 * This module centralize all the environment variables of the application. Thanks to this module, there MUST NOT be any
 */

module.exports = (() => {
    const environment = {
        server: {
            port: 3000,
            version: "1.0.0",
            title: "Sms Solution - Gateway"
        },
        authentication: {
            gen_pry_id: 181,
            expires_in: '500m',
            secret: 'sms-s0lut10n-2022*1'
        },
        database: {
            user: process.env.USERDB,
            password: process.env.PASS,
            database: process.env.DATABASE,
            host: process.env.HOST_DB,
            port: process.env.PORT_DB
        }   
    }

    return environment;
})();