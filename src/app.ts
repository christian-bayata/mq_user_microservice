import express, { Request, Response } from "express";
import { Database } from "./config/database/index";

const app: any = express();

/* Connect to the database */
const connectionString = require("./config/database/connection");
new Database(connectionString).connect();

/* Ping the API to ensure it is running. */
app.get("/health-check", (req: Request, res: Response) => {
  return res.json({ message: "Health check passed" });
});

/* Declare port and environment, then run the server */
const port = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || "development";
let server = app.listen(port, () => console.log(`Server is running on port ${port} in ${environment} mode`));
