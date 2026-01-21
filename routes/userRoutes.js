import express from 'express'
import { body, validationResult } from 'express-validator'
const router = express.Router()

router.get("/login", (req, res)=>{
    res.render("user/login")
})
router.get("/register", (req, res)=>{
    res.render("user/register", {errors : []})
})

var registerValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please Enter a valid Email Id'),
    body('password').isLength({min:3, max:8}).withMessage('Length must be greatr than 3 and less than 8')
]
router.post("/register", registerValidation, (req, res)=>{
    console.log(req.body);
    
    const err = validationResult(req)
    if(err){
        res.render("user/register", {errors: err.array()} )
    }else{
        res.send("User Registerd !" )
    }
})

export default router