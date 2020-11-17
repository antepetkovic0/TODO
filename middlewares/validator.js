const validateReq = (schema) => {
    return (req, res, next) => {        
        const options = {
            abortEarly: false   //include all errors
        };
        const { error, value } = schema.validate(req.body, options);
        if (error) {
            console.log(error);
            res.status(422).send({ validationError: error.details.map(x => x.message)});
        } else {
            req.body = value;
            next();
        }
    };
};

module.exports = { validateReq };