import { getDB } from "../config/db.js";
import bcrypt from 'bcrypt'

export const createStuent = async(req, res)=>{
    try{
        const db = getDB();
        const {password, ...rest} = req.body
        const hashPass = await bcrypt.hash(password, 10)        
        const collection =  await db.listCollections({name:'students'}).toArray();
        if(collection.length === 0){
            throw new Error("Collection students does not exist")
        }
        const student = await db.collection('students').insertOne({
            ...rest,
            password:hashPass
        });
        return student;
    }catch(err){
        throw err;
    }
    
}