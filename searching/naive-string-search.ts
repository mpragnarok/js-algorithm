function naiveStringSearch (longStr:string, search:string):number{
    let matches:number = 0;
    // loop over the longer string

    for (let i = 0; i < longStr.length; i++){
        // loop over the shorter string
        for (let j = 0; j<search.length; j++) {
            // if the characters don't match, break out of the inner loop
            if (longStr[i]!==search[j]) break;
            // if the characters do match, keep going
            else if (longStr[i]===search[j]) i++;
            // if you complete the inner loop and find a match, increment the count of matches 
            
            if (j===search.length-1) matches++;


        }
    }
    // return the counts 
    return matches;
}

function stevenNaiveStringSearch (longStr:string, search:string):number{
    let matches:number = 0;
    // loop over the longer string

    for (let i = 0; i < longStr.length; i++){
        // loop over the shorter string
        for (let j = 0; j<search.length; j++) {
            // if the characters don't match, break out of the inner loop
            console.log(longStr[i+j],search[j])
            if (longStr[i+j]!==search[j]){
                console.log("break!")
                break;
            } 
            // if the characters do match, keep going
            // if you complete the inner loop and find a match, increment the count of matches 
            if (j===search.length-1) matches++;


        }
    }
    // return the counts 
    return matches;
}



// console.log(naiveStringSearch("wowomgzomg","omg"));
// console.log(stevenNaiveStringSearch("lorie loled","lo"));
console.log(naiveStringSearch("lorie loled","pop"));




