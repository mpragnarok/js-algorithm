function recur(n, cur) {
    if (!cur) {
        cur = 0;
    }
    if (n < 2) {
        throw new Error("Invalid input");
    }
    if (n === 2) {
        return 1 / n + cur;
    }
    return recur(n - 1, cur + 1 / (n * (n - 1)));
}

console.log(recur(2, 3));
function withoutRecur(n, cur) {
    if (!cur) cur = 0;
    while (n !== 2) {
        if (n < 2) throw new Error("Invalid input");
        cur = cur + 1 / (n * (n - 1));
        n--;
    }
    return 1 / n + cur;
}

console.log(withoutRecur(2, 3));
