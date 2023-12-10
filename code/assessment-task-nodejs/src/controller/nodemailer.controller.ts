import { createTransport } from "nodemailer";

import { GeoLocation } from "../database";

const transporter = createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d93f0068260c9f",
    pass: "43c339d091fd09",
  },
});

export const sendEmail = (geoLocation: GeoLocation, email: string) => {
  transporter
    .sendMail({
      from: "d93f0068260c9f",
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
