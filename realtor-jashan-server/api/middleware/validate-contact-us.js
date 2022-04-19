const { check, body } = require('express-validator');
module.exports.validateContacts = [
    check('firstname').trim().isLength({min: 1}).withMessage('First Name is Required'),
    check('lastname').trim().isLength({min: 1}).withMessage('Last Name is Required'),
    check('email').trim().isEmail().withMessage('Please enter a valid Email Address'),
    check('phone').trim().if(body('phone').notEmpty()).isLength({min: 10}).withMessage('Enter a valid Phone Number')
]