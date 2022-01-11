import IWordCountDto from "@modules/word/dtos/IWordCountDto";

import { CountWordService } from "./CountWordService";

describe("CountWordService", () => {
  it("should return word 'is' with count 4, word 'a' with count 3", () => {
    const countWordService = new CountWordService();
    const response: IWordCountDto[] = countWordService.execute(
      "I was able to find once a person with a Rick name, but Rick looks like is, a common name, likely Edilson is not common but can be because Edilson is an old name, Rick also is old but not as Vera",
      2
    );

    expect(response[0].word).toEqual("is");
    expect(response[0].count).toEqual(4);
    expect(response[1].word).toEqual("a");
    expect(response[1].count).toEqual(3);
  });
});
