console.log('Here is : ', 'Reduce & Filter')

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 }
  
];


/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
function avgAge(arr) {
const av = arr.reduce (function (accumulator, person) {
  let all =accumulator + person.age
  return all
}, 0);
return av/arr.length;}
ava =avgAge(persons)
console.log (ava)
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestName(arr) {
const L =arr.reduce(function(accumulator, person) {
  full= person.name.first + person.name.last;
  if (full.length > accumulator.l1){
    accumulator.l1=full.length
    accumulator.person =full
  }
  return accumulator
},{l1:0 , person: null})
return L
}
longest = longestName(persons)
console.log (longest)
/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
num = [2 , 10 , 5 , 6 , 7 , 8 , 9]
function maxNumber(arr) {
bigest  = arr.reduce (function (accumulator,array){
  if (array > accumulator){
    accumulator= array
  }
  return accumulator
},0)
return bigest
}
bigestNumbrer= maxNumber(num)
console.log (bigestNumbrer)
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
S = "hello world, Hi every one";
function repeatChar(str , x){
const arr = str.split('')

c = arr.reduce (function (accumulator , st){
  if (st === x){
  accumulator +=1
  }
  return accumulator
},0)
return c}


const char = repeatChar(S, "o");
console.log(char);
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

const rangeOfNum = (a, b) => {
  let arr = [];
  for (let i = a-1; i <= b - 1; i++) {
    arr.push(i + 1);
  }
  return arr;
};
console.log(rangeOfNum(2, 5));




// function usAndNumberBeetweenUs (n1 , n2){
// array = []
// B = array.reduce (function (accumulator){
// if (n1<=n2){
//   array.push(n1) 
// }
// return [...accumulator]
// },[ ])
// return B
// }
// bet = usAndNumberBeetweenUs (2, 5)
// console.log(bet)



function usAndNumberBeetweenUs(num1, num2) {
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  const result = Array.from({ length: end - start + 1 }).reduce((accumulator, _, index) => {
    return [...accumulator, start + index];
  }, []);

  return result;
}

const numbersArray = usAndNumberBeetweenUs(2, 5);
console.log(numbersArray);



//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
array2 =[1, 8, 6, 4]
function evenOnly(arr) {
  return arr.filter(num => num % 2 === 0);
}

const result = evenOnly(array2);
console.log(result);


/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour (arr){
 return arr.filter(num => num % 4 == 0)
}
const result2 = multiFour(array2);
console.log(result2);
/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
array3 =["hello", "world"]
function containChar(arr, char) {
  return arr.filter(str => str.includes(char));
}

const result3 = containChar(array3, "w");
console.log(result3);

const result4 = containChar(array3, "l");
console.log(result4);


/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
function evenIndexOddLength (arr){
return arr.filter(str => str.length % 2 != 0)
}
console.log (evenIndexOddLength(strings))
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan (arr ,number){
  return arr.filter(people => people.age > number)
}
console.log (olderThan(persons ,56))
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan (arr ,l){
  return arr.filter(str => str.length < l)
}
console.log (shorterThan(strings ,5))

// if you finish the exercises review the material of the week and help your classmate
