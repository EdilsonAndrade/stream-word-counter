import { CountWordService } from "@modules/word/services/CountWordService";
import { Request, Response } from "express";
import fs from "fs";
import { container } from "tsyringe";

import FileReader from "@shared/util/fileReader";

class WordController {
  async handle(request: Request, response: Response) {
    const wordService = container.resolve(CountWordService);
    const fileReader = new FileReader();

    const { file } = request;
    const { quantityWord } = request.body;

    if (file) {
      const filePath = `./src/temp/${file?.filename}`;
      try {
        if (file.size && file.size >= 1.01e11) {
          fs.rmSync(filePath);
          return response.status(400).json("Invalid file / size");
        }
        const readableFile = await fileReader.readFile(file);
        const wordCounter = await wordService.execute(
          readableFile.join(" ").toString(),
          quantityWord
        );
        fs.rmSync(filePath);
        return response.json(wordCounter);
      } catch (error) {
        fs.rmSync(filePath);
        return response
          .status(400)
          .json({ error, message: "An error occurried" });
      }
    }

    return response.status(400).json("No file send");
  }
}

export { WordController };
