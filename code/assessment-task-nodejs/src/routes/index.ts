import { Router } from "express";
export const router = Router();

import { GeoLocationRouter } from "./geo-location.router";
import { globalCatch } from "../shared";

router.use("/geo-location", GeoLocationRouter);

router.use(globalCatch);
