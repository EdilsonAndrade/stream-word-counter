import { WordController } from "@modules/word/controllers/CountWordController";
import { Router } from "express";
import multer from "multer";

const upload = multer({
  dest: "./src/temp",
  limits: {
    fileSize: 1.01e11,
  },
});
const wordRoute = Router();
const wordControler = new WordController();

wordRoute.post("/", upload.single("file"), (request, response) => {
  return wordControler.handle(request, response);
});

export default wordRoute;
