import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './routes/routes.js'
import dbCon from "./utlis/db.js";



dotenv.config()
const app=express()
dbCon()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api',routers)

app.get('/health',(req,res) =>{
    return res.status(200).json({messs: "ok"})
})


app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`)
})