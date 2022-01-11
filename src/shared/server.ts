import "reflect-metadata";
import * as dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";

import router from "@shared/routes/api/v1";

import swaggerFile from "../documentation/swagger.json";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/api/v1/", router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
