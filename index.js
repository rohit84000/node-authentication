import express from 'express'
import userRoutes from './routes/userRoutes.js'
import { dbConnection } from './config/db.js'

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine', 'ejs')
await dbConnection();
app.use("/", userRoutes)

app.listen(3200)