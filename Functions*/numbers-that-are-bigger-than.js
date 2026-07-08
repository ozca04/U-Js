function mystery(arr){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            x++;
        }
    }
    return x;
}
console.log(mystery([5, 15, 8, 20, 3]));

///////////////////////////////////////////

function sumPositives(num){
    let container = 0;
    for(i = 0; i < num.length; i++){
        if(num[i] > 0){
            container += num[i]//container = container + num[i]
        }
    }
    return container 
}

console.log(sumPositives([1, -5, 3, -4, -3]))

///////////////////////////////////////////////////
function findLongest(words){
    let longest = "";
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest;
}