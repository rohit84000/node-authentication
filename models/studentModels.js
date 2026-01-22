import { getDB } from "../config/db.js";

export const getStudents = async()=>{
    const db = getDB();
    return await db.collection('students').find().toArray()
}