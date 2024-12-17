import express,{Request,Response,NextFunction} from "express";
import bcrypt from "bcryptjs";
import {generateToken} from "../utils/jwt";

const router=express.Router();

//User
const user=[{
    id:1,
    username:"sso",
    password:bcrypt.hashSync("passwordsso",10)
}];


//endpoint
router.post("/login",async(req:Request,res:Response,next:NextFunction)=>{
    try{
    const {username,password}=req.body;
    const requestUser=await user.find((u)=>u.username==username);
    
    if(!requestUser||!(await bcrypt.compare(password,requestUser.password))){
        res.status(401).json({'message':'Invalid Incredential'});
    }

    const token = generateToken({ userId: requestUser!.id });
     res.json({ token });
    }catch(error){
        next(error);
    }
});

export default router;
