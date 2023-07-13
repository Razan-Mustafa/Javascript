/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function person (job,geo,PaName,numkids){
  document.getElementById('demo').innerHTML= (`You will be a ${job} in ${geo} , and married tob ${PaName} with ${numkids} kids`)
}
person('software_engineer', 'jordan', 'Alice', 3);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age){
  document.getElementById('demo1').innerHTML= (`Your doggie is ${dog= age*7} years old in dog years!`)
}
calculateDogAge(1)
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply (age , amount){
  document.getElementById('demo2').innerHTML= (`You will need ${res= (100-age)*365*amount} cups of tea to last you until the ripe old age of 100`)

}
calculateSupply(30,3)
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
  let x= 'Hello ' +name;
  return x;
}
document.getElementById('demo3').innerHTML= greet('Adam');

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
function double(x) {
  return 2 * x;
}

function double(y) {
  return 2 * y;
}

function double(z) {
  return 2 * z;
}


/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3(x){
  return 2 * x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(c){
  document.getElementById('demo4').innerHTML= (c**3)
}
cube(4)
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(b,n){
  document.getElementById('demo5').innerHTML= (b*n)
}
multiply(3,4)
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age1){
if (age1 >=20){ r="yes you can"
return r}
else {
 let r= "please come back after "+ (20-age1) +" years to get one";
  return r;}
}
document.getElementById("demo6").innerHTML= canIGetADrivingLicense(17)
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(x, y){
if (x.length === y.length ){
  return 'true'
}else 
return 'false'
}
document.getElementById("demo7").innerHTML= sameLength('razan','mustafa')


/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer (x,y){
if (x>y){ return "x"}
else {return y}
}
document.getElementById("demo8").innerHTML= largerNubmer(5,8)

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer (x,y,z){
  if (x<y && x<z){ return x}
  else if(y<z &&y<x ){return y}
  else {return z}
  }
  document.getElementById("demo8").innerHTML= smallerNubmer(5,1,22)
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(){

}
  

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(c){
if (c%2==0){
  return "true"
}else {return "false"}
}
document.getElementById("demo11").innerHTML= isEven(22)

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(c){
  if (c%2==0){
    return "false"
  }else {return "true"}
  }
  document.getElementById("demo12").innerHTML= isOdd(22)

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(h){
p=Math.abs(h)
return p
}
document.getElementById("demo13").innerHTML= positive(-22)

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(Fn,Ln){
full=(Fn +' '+Ln)
return full
}
document.getElementById("demo14").innerHTML= fullName('Razan','Mustafa')

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(x,y,z,w,r){
  avg= (x+y+z+w+r)/5;
  return avg
}
document.getElementById("demo15").innerHTML= average(2,3,4,5,7);

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  return Math.random();
}
document.getElementById("demo16").innerHTML= randomNumber();

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(min,max){
  return Math.random() * (max - min) + min;
}
document.getElementById("demo17").innerHTML= randomBetweenNumbers(1,8);

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/


function scoreInUniversty(s){
  var score;
  switch (true){
    case s<50 : score="F";
    break;
    case s <70 : score='D';
    break;
    case s<85 : score='C';
    break;
    case s<95: score ='B';
    break;
    case s<=100 :score='A';
  }
  return score;
}
score=scoreInUniversty(95);
document.getElementById("demo18").innerHTML= (score);


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
function counter() {
  let count = 1;

  return function () {
    return count++;
  };
}
c = counter();
document.getElementById("demo19").innerHTML= (c());
document.getElementById("demo20").innerHTML= (c());
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/