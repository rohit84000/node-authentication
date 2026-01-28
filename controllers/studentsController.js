import { validationResult } from "express-validator";
import { createStuent, findStuent } from "../models/studentModels.js";

export const register = async (req, res, next)=>{
        try {
            const err = validationResult(req)
            if(err.errors && err.errors.length > 0 ){
                res.render("user/register", {errors: err.array()} )
            }else{
                const data = await createStuent(req, res);
                if(data){
                    res.render("user/login", {errors : []})
                }
            }
    } catch (error) {
        console.log(error.message);
        
    }
}

export const submitLogin = async (req, res, next)=>{
    try {
        const err = validationResult(req)
        if(err && err.errors.length > 0){
            res.render("user/login", {errors:err.array()})
        }
        const data = await findStuent(req)
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }    
}
