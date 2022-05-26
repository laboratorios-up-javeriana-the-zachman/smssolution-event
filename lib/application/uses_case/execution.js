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
    let date_now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const messages = [
        {
            "message_id": "",
            "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
            "telephone": "573138987858",
            "user_id": "",
            "campaign_id": ""
        }
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573123418324",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573188358600",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573008955660",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573014628210",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573015652870",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573043330674",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573046577977",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573057133835",
        //     "user_id": "",
        //     "campaign_id": ""
        // },        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573115635823",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573124467689",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573142288123",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573143074451",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573166209420",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573174188375",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573183121912",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573138987858",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573202391629",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573224612382",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573209720220",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573233263431",
        //     "user_id": "",
        //     "campaign_id": ""
        // },
        // {
        //     "message_id": "",
        //     "text_message": `Este es un mensaje de prueba enviado por The Zachman  desde el demo de la clase, enviado a las: ${date_now}`,
        //     "telephone": "573134772806",
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
        console.lo(`Execution date: ${date_now}`);
        messages.forEach(element => {
            options.body = element;
            request(options);
        });

        events.forEach(element => {
            element.date_last_execution = date_now;
            element.state = false;
            event_repository.update(element);
        });
    } catch (error) {
        console.log(error);
    }

}

module.exports = event_select;
