// Print odd numbers in an array

let newArr=[1,5,7,11,15,30,22]
oddNumber=newArr.filter(item =>{
    return item%2!==0;
});console.log(oddNumber);

// Convert all the strings to title caps in a string array

let str =["i'm","a","good","person"];
str=str.map(word=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
})
console.log(str);

// Sum of all numbers in an array

let sum=newArr.reduce((sum,n) =>{
    return sum + n;
})
console.log(sum);

// Return all the prime numbers in an array

let primeArray=newArr.filter((item=>{
    for(let i=2;i<item;i++){
    if(item%i==0){
        return false;
    }
    return true;
}
}))
console.log(primeArray);

// Return all the palindromes in an array

let palinDrome=newArr.filter((item=>{
    let pal=item+""
    if((pal.split("").reverse().join(""))==item+""){
        return true
    }else{
        return false;
    }
}))
console.log(palinDrome);
