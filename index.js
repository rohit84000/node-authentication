import express from 'express'
import userRoutes from './routes/userRoutes.js'
import { dbConnection } from './config/db.js'

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine', 'ejs')
await dbConnection();
app.use("/user/", userRoutes)


app.get("/", (req, res)=>{
    res.send("Everything is Working!")
})

app.listen(3200)