const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

let modifiedFood = foods.slice(1,4);
console.log(foods);

 foods.splice(2,0,"noodles"); 
 foods.splice(3,0,"icecream");
console.log(foods);

numberArray = [2,35,34,65,72];
let evennum = numberArray.filter(isEven) 
function isEven(a) {
    if(a%2==0){
        return a;
    }
}

let evennum1 = numberArray.filter(( /*a*/ ) => /*{if(a%2==0){return a}}*/_)
const myArray = [11, 34, 20, 5, 53, 16]
let squarenum =myArray.map(function findSquareOfNumbers(a){
    let x = a*a;
    return x;
})

const myArray1 = [2, 3, 5, 10]
let multnum = myArray1.reduce(multiply)
function multiply(a,b){
    return a*b;
}