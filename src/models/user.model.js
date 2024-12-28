import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

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
    require:true,
    select:false
  },
  socketId:{
    Type:String
  }

})

userSchema.method.genrateAuthToken = function(){
  const token  =  jwt.sign({ _id: this._id }, process.env.ACCESS_TOKEN_SECRET);
  return token ;
}
userSchema.method.comparePassword = async function(password){
  return await bcrypt.compare(password , this.password);
}
userSchema.method.hashPassword = async function (password) {
  return await bcrypt.hash(password , 10);
}

export const User = mongoose.model("User" , userSchema)