import IWordCountDto from "../dtos/IWordCountDto";

class CountWordService {
  execute(fileContent: string, quantityWords: number): IWordCountDto[] {
    let content = fileContent.replace(/[^\w\s]/gi, "");
    content = content.replace(/\r\n/g, " ");
    const wordArray = content.split(" ");
    const words: IWordCountDto[] = [];

    wordArray.forEach((word) => {
      const found = words.find((w) => w.word === word);
      if (found) {
        found.count += 1;
      } else {
        words.push({
          word,
          count: 1,
        });
      }
    });

    let response = words.sort((a, b) => b.count - a.count);
    response = response.splice(0, quantityWords);

    return response;
  }
}

export { CountWordService };
