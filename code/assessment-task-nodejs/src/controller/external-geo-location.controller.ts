import opencage from "opencage-api-client";
import { config } from "dotenv";
import { join } from "path";

config({
  path: join(__dirname, "..", "..", ".env"),
});

export const getGeoLocation = async (latitude?: string, longitude?: string) => {
  if (!latitude || !longitude) {
    return null;
  }

  const data = await opencage.geocode({
    q: `${latitude}, ${longitude}`,
    language: "en",
  });

  if (data.status.code == 200 && data.results.length > 0) {
    return data;
  }

  return null;
};
