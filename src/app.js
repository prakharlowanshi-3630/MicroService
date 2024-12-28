import express from 'express';
import cors from "cors"
import dotenv from 'dotenv'
dotenv.config({
    path:"./.env"
})
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/' , (req,res)=>{
   res.send( console.log(" hello "));
})
import userRouter from './routes/user.router.js';
app.use('/users',userRouter)

export {app}