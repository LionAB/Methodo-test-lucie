import { fizzBuzz } from "../fizzBuzz";

describe("fizzBuzz", () => {
    it("should return of type string  ", () => {
        expect(typeof fizzBuzz(1)).toBe("string");
    });
    it ("should return Fizz when the parameter is divisible by 3", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });
    it ("should return Buzz when the parameter is divisible by 5", () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });
    it ("should return FizzBuzz when the parameter is divisible by 3 and 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it ("should return NOPE ! when the parameter is not divisible by 3 or 5", () => {
        expect(fizzBuzz(7)).toBe("NOPE !");
    });
});