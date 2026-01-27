import express from 'express'
import { body, validationResult } from 'express-validator'
import { createStuent } from '../models/studentModels.js'
const router = express.Router()

router.get("/login", (req, res)=>{
    res.render("user/login")
})
router.get("/register", (req, res)=>{
    res.render("user/register", {errors : []})
})

var registerValidation = [
    body('name').notEmpty().withMessage('Name is required').isLength({min:3}).withMessage('Name Length must be greater than 3.'),
    body('email').notEmpty().withMessage('Email field is required.').isEmail().withMessage('Please Enter a valid Email Id'),
    body('password').notEmpty().withMessage('Password is required').isLength({min:3, max:8}).withMessage('Length must be greatr than 3 and less than 8')
]
router.post("/register", registerValidation, async(req, res)=>{
    const err = validationResult(req)
    if(err.errors && err.errors.length > 0 ){
        res.render("user/register", {errors: err.array()} )
    }else{
        res.send("User Registerd !" )
        const data = await createStuent(req, res);
        console.log(data);
        
    }
})

export default router