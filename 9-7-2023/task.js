/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
let z= 250;
let zakat = z * 2.5/100;
console.log(zakat);

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
const Array1 = [1,7,9,45];
const Array2 = ["Str", "alex","moh"];
const Array3 = ['the','fox', 'over', 'lazy', 'dog'];


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
var fruits=["Tomato","Banana","Watermelon"];
console.log(fruits.indexOf('Banana'));
console.log(fruits.indexOf('Tomato'));

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
const myFavoriteFood = ["potato", "pizza",];
const myFavoriteSport = ["football", "basketball", "jumping"]
const myFavoriteMovie = ["run", "back to the future"]


/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
const firstOfArray = [91,4,5,8,21];
console.log(firstOfArray [0])



/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
console.log (firstOfArray.length)
console.log(firstOfArray [5-1])

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var arrayn = [0,5,7,9];
console.log(arrayn.push (10))
console.log(arrayn.shift ())
console.log(arrayn.unshift (1,2,3,4))
arrayn[4]=6;
arrayn[5]=8;
console.log(arrayn)
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/
var arrayn = [0,5,7,9];
console.log(arrayn.pop ())
console.log(arrayn.pop ())
console.log(arrayn.shift ())
console.log(arrayn.push (9))
console.log(arrayn.push (-7))
console.log(arrayn.push (3.5))


console.log(arrayn)

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
let unsortedArray = [ -3, 8, 7, 6, 5, -4, 3, 2, 1  ];
let sortedArray = unsortedArray.sort();
console.log(sortedArray);




