import {Router} from 'express';
import {body} from 'express-validator'
import { registerUser } from '../controllers/user.controller.js';
const userRouter = Router();

userRouter.post("/register" , [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullName.firstName').isLength({min:3}).withMessage('pls enter the first name with more than 3 character'),
    body('password') .isLength({min:6}).withMessage('the password must we contain 6 character')
],registerUser)



export default userRouter;
