import { fizzBuzz } from "../index";

describe("fizzBuzz", () => {
    it("should return of type string  ", () => {
        expect(typeof fizzBuzz(1)).toBe("string");
    });
    it ("should return Fizz when the parameter is divisible by 3", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });
});