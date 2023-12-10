import { createTransport } from "nodemailer";
import { config } from "dotenv";
import { join } from "path";

import { GeoLocation } from "../database";

config({
  path: join(__dirname, "..", "..", ".env"),
});

const transporter = createTransport({
  service: "hotmail",
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASSWORD,
  },
});

export const sendEmail = (geoLocation: GeoLocation, email: string) => {
  transporter
    .sendMail({
      from: process.env.MAILER_EMAIL,
      to: email,
      subject: "You received a GeoLocation! Check It.",
      text: `
      Location id: ${geoLocation.id}
      Location details: ${geoLocation.location}
      Location longitude: ${geoLocation.longitude}
      Location latitude ${geoLocation.latitude}
      `,
    })
    .then((info) => {
      console.log("Message sent: %s", info.messageId);
    });
};
