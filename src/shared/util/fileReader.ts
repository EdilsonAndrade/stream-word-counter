import fs from "fs";

class FileReader {
  async readFile(file: Express.Multer.File): Promise<string[]> {
    const chunks: string[] = [];
    const filePath = `./src/temp/${file?.filename}`;
    const stream = fs.createReadStream(filePath, "utf-8");

    return new Promise((resolv, reject) => {
      stream.on("error", (error) => {
        return reject(error);
      });

      stream.on("data", (chunk) => {
        chunks.push(chunk.toString());
      });

      stream.on("end", () => {
        return resolv(chunks);
      });
    });
  }
}

export default FileReader;
