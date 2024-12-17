import jwt, { JwtPayload } from 'jsonwebtoken';
import { SECRET_KEY,TOKEN_EXPIRE } from './constant';

export const generateToken=(payload:object):string=>{
    return jwt.sign(payload,SECRET_KEY,{expiresIn:TOKEN_EXPIRE});
}

export const verifyToken=(token:string):string|JwtPayload=>{
    return jwt.verify(token,SECRET_KEY);
}