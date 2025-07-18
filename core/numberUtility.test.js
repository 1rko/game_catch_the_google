import {NumberUtility} from "./numberUtility";


describe('NumberUtility', () => {
    let numberUtility;

    beforeAll(() => {
        numberUtility = new NumberUtility();
        jest.spyOn(Math, 'random').mockReturnValue(0.5);
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    describe('getRandomIntegerValue', () => {
        test('возвращает целое число в диапазоне от 1 до 10', () => {
            const result = numberUtility.getRandomIntegerValue(1, 10);
            expect(result).toBeGreaterThanOrEqual(1);
            expect(result).toBeLessThan(10);
            expect(Number.isInteger(result)).toBe(true);
        });

        test('возвращает 5 при mocked random (0.5) для диапазона 1-10', () => {
            expect(numberUtility.getRandomIntegerValue(1, 10)).toBe(5); // 0.5*(10-1)+1=5.5→5
        });

        test('выбрасывает ошибку если fromInclusive < 1', () => {
            expect(() => numberUtility.getRandomIntegerValue(0, 10))
                .toThrow("fromInclusive must be at least 1");
            expect(() => numberUtility.getRandomIntegerValue(-5, 10))
                .toThrow("fromInclusive must be at least 1");
        });

        test('выбрасывает ошибку при нечисловых аргументах', () => {
            expect(() => numberUtility.getRandomIntegerValue('1', 10))
                .toThrow("Arguments must be a number.");
            expect(() => numberUtility.getRandomIntegerValue(1, '10'))
                .toThrow("Arguments must be a number.");
        });

        test('выбрасывает ошибку если fromInclusive >= toExclusive', () => {
            expect(() => numberUtility.getRandomIntegerValue(5, 5))
                .toThrow("toExclusive must be greater than fromInclusive.");
            expect(() => numberUtility.getRandomIntegerValue(10, 1))
                .toThrow("toExclusive must be greater than fromInclusive.");
        });

        test('работает с минимальным допустимым диапазоном 1-2', () => {
            expect(numberUtility.getRandomIntegerValue(1, 2)).toBe(1); // 0.5*(2-1)+1=1.5→1
        });

        test('работает с большими числами', () => {
            expect(numberUtility.getRandomIntegerValue(100, 200)).toBe(150);
        });
    });
});