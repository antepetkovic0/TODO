const validateReq = (schema) => {
    return (req, res, next) => {  
        //including all errors      
        const options = {
            abortEarly: false
        };
        const { error, value } = schema.validate(req.body, options);
        if (error) {
            //removing "" from validation error messages
            res.status(422).send({ validationError: error.details.map(x => x.message.replace(/"/g, ''))});
        } else {
            req.body = value;
            next();
        }
    };
};

module.exports = { validateReq };