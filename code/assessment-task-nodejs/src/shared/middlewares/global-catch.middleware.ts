import { Request, Response, NextFunction } from "express";

export function globalCatch(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err) {
    if (typeof err === "string") {
      message = err;
    } else if (typeof err === "object") {
      if (err.message) {
        message = err.message;
      }
      if (err.statusCode) {
        statusCode = err.statusCode;
      }
    }
  }

  return res.status(statusCode).send({
    statusCode,
    message,
  });
}
