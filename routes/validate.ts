import express,{Request,Response,NextFunction} from "express";
import {verifyToken} from "../utils/jwt";

const router=express.Router();

router.get('/',async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try{
        const token=req.headers.authorization?.split("")[1];
    if(!token){
        res.status(401).json({error:"Token is missing."});
    }

    const payload=verifyToken(token!);
    res.json({valid:true,payload});
    }catch(error){
        res.status(401).json({error:"Invalid token"});
        next(error);
    }
});

export default router;