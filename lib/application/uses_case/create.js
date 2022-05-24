const event_repository = require("../../domain/repository/event.repository");
const model_event = require("../../domain/models/event.model");
const event_select = {};

event_select.create = async function (event) {

    let new_event = await event_repository.create(event);
    return new_event;
}

module.exports = event_select;
