//Print odd numbers in an array

let arr = [1,2,5,7,9,11,22,33,55,67,99,111];

let oddArr=(function(arr) {
  return(arr.filter(function(val) {
    return val%2!==0;
  }))
})(arr);
console.log(oddArr);

// Convert all the strings to title caps in a string array

let strArr=["i'm","a","full","stack","developer"];

let stringCase=function(){
  return strArr.map(word=>{
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  }();console.log(stringCase);

// Sum of all numbers in an array

let sum = function(arr){
return arr.reduce((add, val)=>{
return add + val;
})
}(arr);
console.log(sum);

// Return all the prime numbers in an array

let primeArr = function (arr){
  return arr.filter((item) =>{
    for(let i=2; i<item; i++){
      if(item%i===0){
        return false;
      }
      return true;
    }
  })
}(arr);
console.log(primeArr);

// Return all the palindromes in an array

let PalinArray = (function(arr){
return(arr.filter((item)=>{
let pal=item+"";
if((pal.split("").reverse().join(""))==item+""){
  return true;
}else{
  return false;
}
}))
})(arr);
console.log(PalinArray);

// Return median of two sorted arrays of the same size

let arr1=[1,2,3,4,5,6,7,8];
let arr2=[2,3,4,5,6,7,8,9,10,11];
let medOfArr=function(arr1,arr2){
  if(arr1.length%2==0){
    console.log("median of the array: "+arr1[arr1.length/2])
  }else{
    console.log("median of the array: "+arr1[arr1.length+1/2])
  }
  if(arr2.length%2==0){
    console.log("median of the array: "+arr2[arr2.length/2])
  }else{
    console.log("median of the array: "+arr2[arr2.length+1/2])
  }
  return;
}(arr1,arr2);

// Remove duplicates from an array

let dupArray = ["M","M","A","A","N","O"];
let removeDuplicates = (function(dupArray,index) { 
  return[...new Set(dupArray)];
  })(dupArray)
  console.log(removeDuplicates);

// Rotate an array by k time

let arr3=[1,0,3,2,4];
let rotateArray = function(arr3,k) {
  for(i=0;i<k;i++){
    arr3.push(arr3.shift());
    }
    return arr3;
  }(arr3, 1)
console.log(rotateArray);
