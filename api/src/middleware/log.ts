import { NextFunction, Response, Request } from "express"

const logMiddleWare = (req:Request, res:Response, next: NextFunction) => {
    const header = req.headers;
    const userAgent = header["user-agent"];
    console.log("use.agent", userAgent);
    next()
}

export { logMiddleWare }