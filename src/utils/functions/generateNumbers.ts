export function generateRandomNumbers(amount: number, usedNumbers: number[]): number[] {
    const maxDigits = 9;
    const maxNumber = Math.pow(10, maxDigits) - 1;
    const uniqueNumbers: number[] = [];
    const usedNumbersSet = new Set(usedNumbers.map(num => num.toString().padStart(maxDigits, '0')));
    const maxAttempts = amount * 10;

    if (amount > maxNumber - usedNumbers.length) {
        throw new Error(`Not enough available numbers (${maxNumber} total, ${usedNumbers.length} used, ${amount} requested)`);
    }

    let attempts = 0;
    while (uniqueNumbers.length < amount && attempts++ < maxAttempts) {
        const randomNum = Math.floor(Math.random() * maxNumber) + 1;
        const numStr = randomNum.toString().padStart(maxDigits, '0');

        if (!usedNumbersSet.has(numStr)) {
            usedNumbersSet.add(numStr);
            uniqueNumbers.push(randomNum);
        }
    }

    if (uniqueNumbers.length < amount) {
        throw new Error(`Failed to generate all unique numbers after ${maxAttempts} attempts`);
    }

    return uniqueNumbers;
}