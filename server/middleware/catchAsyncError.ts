import { Request, Response, NextFunction } from "express"


export const catchAsyncError = (thefunc:any)=>{

    (req:Request,res:Response,  next:NextFunction)=>{
        Promise.resolve(thefunc(req,res)).catch(next)
    }

}