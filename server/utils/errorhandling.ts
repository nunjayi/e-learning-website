class ErrorHandling extends Error {
    statusCode:number
    constructor(message:any, statusCode:number){
        super(message)
        this.statusCode = statusCode 
        Error.captureStackTrace(this, this.constructor)
    }
    
}
module.exports = ErrorHandling