import { DEBUG } from "../config/index.js";

const ErrorHandler = (err, req, res, next)=>{
    let statusCode = 500;

    let data = {
        message: 'Internal Server Error',
        ...(DEBUG==='true' && {originalError: err.message})
    }

    return res.status(statusCode).json(data);
}

export default ErrorHandler;