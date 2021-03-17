function stringifyNumbers(obj) {
    let newObj = {};
    for (let item in obj) {
        if (typeof obj[item] === "number") {
            newObj[item] = obj[item].toString();
        } else if (typeof obj[item] === "object" && !Array.isArray(obj[item])) {
            newObj[item] = stringifyNumbers(obj[item]);
        } else {
            newObj[item] = obj[item];
        }
    }
    return newObj;
}
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
