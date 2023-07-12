// 1. Write a JS code to print numbers from 1 to 10
let numbers = "";
for (let i = 0; i < 11; i++){
   document.getElementById('demo5').innerHTML= (numbers+= "<br>" + i)
}
/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
let arr1 = [13,23,12,45,22,48,66,100];
let even = []
for (j=0 ; j < arr1.length ; j++){
   let o = arr1[j];
   if (o % 2 == 0){
   even.push(o);}   
}
document.getElementById('demo6').innerHTML= (even);


/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
for(m=1; m <= 8; m++)
{
   for(n=1; n<=m; n++){
   document.write(n + ' ');
   }
document.write('<br>');
}
 /* 
4.Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let u = "don’t know why"
*/
let u = "don't know why";
if (u.includes("y")) {
   document.write("yes");
} else {
   document.write("no");
}
