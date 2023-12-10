import { Request, Response, NextFunction } from "express";
import { validateOrReject } from "class-validator";

import { EmailGeoLocationValidationSchema } from "../schemas";
import { createExceptionInstance } from "../utils";

export const emailGeoLocationValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body) {
      return next(
        createExceptionInstance("Missing request body!", "BAD_REQUEST", 400)
      );
    }

    const schema = new EmailGeoLocationValidationSchema();
    schema.longitude = req.body.longitude;
    schema.latitude = req.body.latitude;
    schema.email = req.body.email;

    await validateOrReject(schema);

    next();
  } catch (error: any) {
    return next(
      createExceptionInstance(
        Object.values(error[0].constraints)[0] as string,
        "BAD_REQUEST",
        400
      )
    );
  }
};
