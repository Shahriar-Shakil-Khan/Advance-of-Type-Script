"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
const KgToGMConverter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted Output is : ${Number(value) * 1000}`;
    }
};
const result1 = KgToGMConverter(5);
console.log({ result1 });
const result2 = KgToGMConverter("2 Kg");
console.log({ result2 });
//# sourceMappingURL=typeAssertion.js.map