import { body } from "express-validator";

var registerValidation = [
    body('name').notEmpty().withMessage('Name is required').isLength({min:3}).withMessage('Name Length must be greater than 3.'),
    body('email').notEmpty().withMessage('Email field is required.').isEmail().withMessage('Please Enter a valid Email Id'),
    body('password').notEmpty().withMessage('Password is required').isLength({min:3, max:8}).withMessage('Length must be greatr than 3 and less than 8')
]

export default registerValidation;