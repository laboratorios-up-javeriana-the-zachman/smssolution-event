'use strict';
const Joi = require('joi');

const router = {};

//Controllers import
const event_controller = require('../controllers/event.controller');

module.exports = {
    name: 'event',
    version: '1.0.0',
    register: async (server) => {
        server.route([
            {
                method: 'POST',
                path: '/events/event',
                handler: async (req, res) => {
                    return await event_controller.create(req, res)
                },
                options: {
                    description: 'Method create event and programming event.',
                    tags: ['api'],
                    validate: {
                        failAction: (request, h, err) => {
                            throw err;
                        },
                        payload: Joi.object({
                            user_id: Joi.string().required().max(255),
                            state: Joi.bool().required(),
                            campaign: Joi.object({
                                campaign_id: Joi.string().required().max(255),
                                initial_date: Joi.string().required().max(255),
                                end_date: Joi.string().required().max(255),
                                parameters: Joi.array().items(
                                    Joi.object({
                                        parameter_id: Joi.string().required().max(255),
                                        value: Joi.string().optional().max(255).allow(null)
                                    }))
                            })
                        })
                    }
                }
            }
        ])
    }
};
