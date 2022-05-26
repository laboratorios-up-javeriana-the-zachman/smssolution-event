'use strict';

const controller_event = {};
const uuid = require('uuid');
const moment = require('moment');
const response_management = require("../../application/server/response.management");
const create_event = require("../../application/uses_case/create");
const execution_event = require("../../application/uses_case/execution");
const event = require('../../domain/models/event.model');

controller_event.create = async function (req, res) {
    try {
        let uiid = uuid.v4();
        let date_now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        let event_in = new event(uiid,
            req.payload.user_id, 
            date_now,
            date_now, 
            date_now,
            req.payload.campaing,
            null, 
            req.payload.state);

        if (await create_event.create(event_in))
            return response_management.bussines_response(res, event_in);
        else
            return response_management.custom_response(res, 404, { "Message": "The event could not be created, please try again." });
    } catch (error) {
        return response_management.error_response(res, { "Message": `The event could not be created, ${error.error}` });
    }
}

controller_event.execution = async function () {
    execution_event.execution();
}

module.exports = controller_event;