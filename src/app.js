import express from 'express';
import cors from "cors"
import dotenv from 'dotenv'
import connectToDb from './db/db.js';
dotenv.config({
    path:"./.env"
})
const app = express();

app.use(cors());

app.get('/' , (req,res)=>{
   res.send( console.log(" hello "));
})
export {app}