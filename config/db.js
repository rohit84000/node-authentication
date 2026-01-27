import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
dotenv.config()
const url = process.env.DB_URL
const dbName = "college"

let db;

export const dbConnection = async ()=>{
    try{
        const client = new MongoClient(url)
        await client.connect()
        db = client.db(dbName)
        console.log("Database Connected!");
           
    }catch(error){
        console.log("Unable to connect with Database!", error); 
    }
}

export const getDB = () => db;
