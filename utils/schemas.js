const joi = require('joi');

module.exports = { 
    registerSchema: joi.object({
        firstname: joi.string().required().regex(/^[A-Za-z]+$/).min(2).max(15),
        lastname: joi.string().required().regex(/^[A-Za-z\-]+$/).min(2).max(25),
        username: joi.string().required().regex(/^[\w]+$/).min(3).max(15),
        email: joi.string().required().email(),
        password: joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/)
        //should have one upper, lower and number; special characters are optional
    }),
    loginSchema: joi.object({
        username: joi.string().required().regex(/^[\w]+$/).min(3).max(15),
        password: joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/)
    })
};