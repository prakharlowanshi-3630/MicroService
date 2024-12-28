import { User } from "../models/user.model.js";
import { ApiError } from "../utils/Apierror.js";
const createUser = async({firstName , lastName , email , password})=>{

    if (!firstName || !email || ! password){
       throw new ApiError(400 , "all feild require");
    }
    const user = User.create({
        fullname:{
            firstName,
            lastName
        },
        email ,
        password 
    }
        
    )
    return user;
}

export {createUser}