import express, { Application } from "express";
import * as bodyParser from "body-parser";
import cors from "cors";

import { AppDataSource } from "./database";
import { normalizePort } from "./shared";
import { router } from "./routes";

async function bootstrap() {
  await AppDataSource.initialize();

  const app: Application = express();

  app.use(
    cors({
      origin: "*",
      allowedHeaders: "*",
    })
  );

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(router);

  const port = normalizePort(process.env.PORT || "3000");
  app.listen(port, () =>
    console.log(`Express server has started on port ${port}.`)
  );
}

bootstrap();
