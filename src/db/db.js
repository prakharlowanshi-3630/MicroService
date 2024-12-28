import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectToDb = async()=>{
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("connected succesfully");
        
    } catch (error) {
        console.log("error")
        console.log(error)
    }

}
export default connectToDb ;