import { fizzBuzz } from "../index";

describe("fizzBuzz", () => {
    it("should return 'test string 1' ", () => {
        expect(typeof fizzBuzz(1)).toBe("string");
    });
});