function makeKmpTable(str) {
    let lps = Array(str.length).fill(0);
    // ababd [0,0,1,2,0]
    // 00100
    //  0020
    //   000
    //    00
    //     0

    for (let x = 0; x < str.length; x++) {
        for (let y = 1; y < str.length; y++) {
            if (str[x] === str[x + y]) lps[x + y] = x + 1;
        }
    }
    console.log(lps);
    return lps;
}

function kmpStringMatching(long, short) {
    let matches = 0;
    // create pie table to find the string pattern and store the index of short string, index z, which starts from 0
    let lps = makeKmpTable(short);

    let i = 0;
    let j = 0;
    // loop through long string, index i, i is not backtracking
    while (i < long.length) {
        if (long[i] === short[j]) {
            // compare long[i] and short[j] is the same, keep comparing next character
            i++;
            j++;
        } else {
            // if they are different, when j is not 0, set j to the index where the character has ocurred
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                // when j is index 0, move i to the next character
                i++;
            }
        }
        if (j === short.length - 1) {
            // if j is the last character, reset j to 0 and compare them all over again
            matches++;
            j = 0;
        }
    }

    return matches;
}

// kmpStringMatching("abcabcabcabababd", "ababd"); // 1
kmpStringMatching("ABABDABACDABABCABAB", "ABABCABAB"); // 1
