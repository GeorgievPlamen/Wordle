export function stringToNumberArray(input: string): number[] {
    const result: number[] = [];

    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        const parsedNumber = parseInt(char, 10);
        
        // Check if parsedNumber is a valid number
        if (!isNaN(parsedNumber)) {
            result.push(parsedNumber);
        }
    }

    return result;
}
