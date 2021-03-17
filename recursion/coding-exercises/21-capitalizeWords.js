function capitalizeWords(arr) {
    let capitals = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            capitalizeWords(arr[i]);
        } else {
            arr[i] = arr[i].toUpperCase();
            console.log(arr[i]);
            capitals.push(arr[i]);
            console.log(capitals);
        }
    }
    return capitals;
}

let words = ["i", "am", "learning", "recursion"];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
