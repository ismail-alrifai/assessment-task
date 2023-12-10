import { Router } from "express";
export const GeoLocationRouter = Router();

import { emailGeoLocationValidator } from "../shared";
import { emailGeoLocation } from "../controller";

GeoLocationRouter.post("/", emailGeoLocationValidator, emailGeoLocation);
