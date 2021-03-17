function capitalizeWords(arr) {
    let capitals = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            capitalizeWords(arr[i]);
        } else {
            arr[i] = arr[i].toUpperCase();
            capitals.push(arr[i]);
        }
    }
    return capitals;
}

let words = ["i", "am", "learning", "recursion"];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
