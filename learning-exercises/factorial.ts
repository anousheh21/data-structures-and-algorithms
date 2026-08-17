function factorial(num: number): number {
    if (num === 1) {
        return 1;
    }

    return factorial(num - 1) * num;
}

const input = 5;
console.log(factorial(input));