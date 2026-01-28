import { body } from "express-validator";

var loginValidation = [
    body('email').notEmpty().withMessage('Email field is required.').isEmail().withMessage('Please Enter a valid Email Id'),
    body('password').notEmpty().withMessage('Password is required')
]

export default loginValidation;