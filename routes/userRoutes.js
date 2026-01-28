import express from 'express'
import { body, validationResult } from 'express-validator'
import { createStuent } from '../models/studentModels.js'
import registerValidation from '../validation/ragisterValidation.js'
import { register, submitLogin } from '../controllers/studentsController.js'
import loginValidation from '../validation/loginValidation.js'
const router = express.Router()

router.get("/", (req, res)=>{
    res.render("user/login", {errors : []})
})
router.get("/register", (req, res)=>{
    res.render("user/register", {errors : []})
})

router.post("/register", registerValidation, register)
router.post("/login", loginValidation, submitLogin)

export default router