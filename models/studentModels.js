import { getDB } from "../config/db.js";

export const createStuent = async(req, res)=>{
    try{
        const db = getDB();
        const collection =  await db.listCollections({name:'students'}).toArray();
        if(collection.length === 0){
            throw new Error("Collection students does not exist")
        }
        const student = await db.collection('students').insertOne(req.body);
        return student;
    }catch(err){
        throw err;
    }
    
}