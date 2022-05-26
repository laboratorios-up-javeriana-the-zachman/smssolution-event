'use strict';

const request = require('request-promise');
const moment = require('moment');

const event_repository = require("../../domain/repository/event.repository");
const model_event = require("../../domain/models/event.model");
const event_select = {};

event_select.execution = async function () {
    let date_now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    let events = await event_repository.select(date_now);
    
    push_message(events);
}

async function push_message(events) {
    const messages = [
        {
            "message_id": "",
            "text_message": "Mensaje de prueba desde postman",
            "telephone": "573138987858",
            "user_id": "",
            "campaign_id": ""
        }
        // ,{
        //     "message_id": "",
        //     "text_message": "Mensaje de prueba desde postman",
        //     "telephone": "573138987858",
        //     "user_id": "",
        //     "campaign_id": ""
        // }
    ]

    const options = {
        encoding: 'utf8',
        uri: 'http://smssolutions-message:3000/message/publish',
        json: true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    try {
        messages.forEach(element => {
            options.body = element;
            request(options); 
        });

        events.forEach(element => {
            let date_now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
            element.date_last_execution = date_now;
            element.state = false;
            event_repository.update(element);
        });        
    } catch (error) {
        console.log(error);
    }

}

module.exports = event_select;
