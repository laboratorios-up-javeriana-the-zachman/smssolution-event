'use strict';

const controller = {};
const response_management = require('../../application/server/response.management');

// Ping controller response to the client avaliable services
controller.ping = async function (res) {
    return response_management.custom_response(res, 200, 'pong');
}

module.exports = controller;