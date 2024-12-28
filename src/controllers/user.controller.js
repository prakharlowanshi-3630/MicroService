import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/Apiresponse.js";
import { validationResult } from "express-validator";
import { ApiError } from "../utils/Apierror.js";
import { createUser } from "../services/user.service.js";

const registerUser = asyncHandler(async (req, res) => {
    console.log("hfashfsahfh");
  const error = validationResult(req);

  if (!error.isEmpty()) {
    throw new ApiError(400, "something went worng");
  }

  

  const {fullName , email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new ApiError(400, "user already exist");
  }
  const hashPassword = User.hashPassword(password);

  const user = await createUser(fullName.firstName, fullName.lastName, email, hashPassword);

  const token = User.genrateAuthToken();

  return res
    .status(200)
    .json(new ApiResponse(200, "changes success", { token, user }));
});

export { registerUser };
