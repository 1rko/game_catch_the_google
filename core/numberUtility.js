export class NumberUtility {
    getRandomIntegerValue(fromInclusive, toExclusive) {
        if (typeof fromInclusive !== "number" || typeof toExclusive !== "number") {
            throw new Error("Arguments must be a number.");
        }
        if (fromInclusive < 1) {
            throw new Error("fromInclusive must be at least 1");
        }
        if (fromInclusive >= toExclusive) {
            throw new Error("toExclusive must be greater than fromInclusive.");
        }
        return Math.floor(Math.random() * (toExclusive - fromInclusive) + fromInclusive);
    }
}

