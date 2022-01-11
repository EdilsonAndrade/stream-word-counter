import wordRoute from "@modules/word/infra/http/routes/word.routes";
import { Router } from "express";

const routes = Router();

routes.use("/wordcount", wordRoute);

export default routes;
