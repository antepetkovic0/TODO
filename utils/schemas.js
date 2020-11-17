const joi = require('joi');

module.exports = { 
    registerSchema: joi.object({
        firstname: joi.string().required().regex(/^[a-z]+$/).min(5),
        lastname: joi.string().required().regex(/^[a-z]+$/),
        username: joi.string().required().regex(/^[\w]+$/),
        email: joi.string().required(),
        password: joi.string().required()
    })
};