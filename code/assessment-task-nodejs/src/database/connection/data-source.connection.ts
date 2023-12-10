import "reflect-metadata";

import { DataSource } from "typeorm";
import { config } from "dotenv";
import { join } from "path";

config({
  path: join(__dirname, "..", "..", "..", ".env"),
});

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db/sql",
  logging: false,
  synchronize: false,
  entities: ["**/*.entity.js"],
  migrations: ["**/*.migration.ts"],
});

/* for mysql */

// import "reflect-metadata";

// import { DataSource } from "typeorm";
// import { config } from "dotenv";
// import { join } from "path";

// config({
//   path: join(__dirname, "..", "..", "..", ".env"),
// });

// export const AppDataSource = new DataSource({
//   type: "mysql",
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT || "3306"),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   logging: false,
//   synchronize: true,
//   entities: ["**/*.entity.js"],
//   migrations: ["**/*.migration.ts"],
// });
