import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName :{
    firstName:{
        Type:String,
        require:true,
        minlength:[3 , " firstname  must be have  more than 3 character"]
    },
    lastName:{
        Type:String,
        minlength:[3 , " lastname  must be have  more than 3 character"]
    }
  },
  email:{
    Type:String,
    unique:true,
    require:true
  },
  password:{
    Type:String,
    require:true
  },
  socketId:{
    Type:String
  }

})

export const User = mongoose.model("User" , userSchema)