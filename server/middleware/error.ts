import { NextFunction,Response, Request } from "express";
import ErrorHandler from "../utils/errorhandling"
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export const ErrorMiddleware = (err:any, req:Request, res:Response, next:NextFunction, )=>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal server error '
    
    //wrong mongodb id error
if(err.name ==="CastErrror" ){
    const message = `resourse not found. invalid ${err.path} `
    err = new ErrorHandler(message,400)
}


if(err.code === 11000){
    const message = `Duplicate ${Object.keys(err.KeyValue)} `
    err = new ErrorHandler(message,400)
}


if(err.name === JsonWebTokenError){
    const message = "Json web token ivalid try again"
    err = new ErrorHandler(message,400)
}

if(err.name === TokenExpiredError){
    const message = "Json web is expired try again "
    err = new ErrorHandler(message,400)
}


res.status(err.statusCode).json({
    success: false,
    message: err.message
})
}

