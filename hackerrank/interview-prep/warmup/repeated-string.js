// Complete the repeatedString function below.
function repeatedString(s, n) {
    let aFrequency = 0;
    let times = Math.floor(n / s.length);
    let module = n % s.length;
    let counts = 0;
    // count the character a frequency in s
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") aFrequency++;
    }
    for (let x = 0; x < module; x++) {
        if (s[x] === "a") counts++;
    }

    counts += aFrequency * times;
    return counts;
}
