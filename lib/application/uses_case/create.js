'use strict';

const request = require('request-promise');
const moment = require('moment');

const event_repository = require("../../domain/repository/event.repository");
const model_event = require("../../domain/models/event.model");
const event_select = {};

event_select.create = async function (event) {
    let frecuencies = await get_frecuency();
    let initial_date = moment(event.campaign.initial_date, 'YYYY-MM-DD HH:mm:ss');

    event.campaign.parameters.forEach(element => {
        frecuencies.forEach(frecuency => {
            if (element.parameter_id == frecuency.id) {
                if (frecuency.value == 'Cada Minuto'){
                    event.date_next_execution = initial_date.add(1, 'm').format('YYYY-MM-DD HH:mm:ss');
                    return;
                }
                else  if (frecuency.value == 'Unica Vez'){
                    event.date_next_execution = initial_date.format('YYYY-MM-DD HH:mm:ss');
                    return;
                }
                else
                    event.date_next_execution = null;
                    return;
            }
        })
    });

    let new_event = await event_repository.create(event);
    return new_event;
}

async function get_frecuency() {
   
        const frecuency = 'c800e869-d9f5-11ec-ba04-06ffa341e858'
        const options = {
            encoding: 'utf8',
            uri: 'http://smssolutions-parameter:3000/parameter?type_id=' + frecuency,
            json: true,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        try {
            let frecuencies = await request(options);
            return frecuencies.message;
        } catch (error) {
            console.log(error);
            return null;
        }
    
}

module.exports = event_select;
