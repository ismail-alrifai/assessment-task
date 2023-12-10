import { NextFunction, Request, Response } from "express";

import { getGeoLocation } from "./external-geo-location.controller";
import { AppDataSource, GeoLocation } from "../database";
import { sendEmail } from "./nodemailer.controller";
import { createExceptionInstance } from "../shared";

const repo = AppDataSource.getRepository(GeoLocation);

export const findOneOrCreate = async ({
  longitude,
  latitude,
}: Partial<GeoLocation>): Promise<GeoLocation | null> => {
  let geoLocation = await repo.findOneBy({
    longitude: longitude,
    latitude: latitude,
  });

  if (!geoLocation) {
    const response = await getGeoLocation(latitude, longitude);
    if (!response?.results?.length) {
      return null;
    }

    const responseLocation = {
      longitude: response.results[0].geometry.lng,
      latitude: response.results[0].geometry.lat,
      location: response.results[0].formatted,
    };
    geoLocation = await repo.findOneBy({
      longitude: responseLocation.longitude,
      latitude: responseLocation.latitude,
    });
    if (!geoLocation) {
      geoLocation = await repo.save(repo.create(responseLocation));
    }
  }

  return geoLocation;
};

export const emailGeoLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { longitude, latitude, email } = req.body;

  const geoLocation = await findOneOrCreate({
    longitude: longitude,
    latitude: latitude,
  });
  if (!geoLocation) {
    return next(
      createExceptionInstance("coordinates are not valid", "BAD_REQUEST", 400)
    );
  }

  sendEmail(geoLocation, email);

  return res.send(geoLocation);
};
