/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
let x=5; 
let y=10; 
if (x>y){
    document.getElementById('demo').innerHTML=(x);
}
else {
    document.getElementById('demo').innerHTML=(y);
}

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let r=3;
let w=-7;
let t=2;
if (r>0 && w>0 && t>0){
    document.getElementById('demo1').innerHTML=('sign is +');
}
else if (r<0 && t<0 && w<0){
    document.getElementById('demo1').innerHTML=('sign is -');
}
else if (r>0 && t<0 && w<0){
    document.getElementById('demo1').innerHTML=('sign is +');
}
else if (r<0 && t>0 && w<0){
    document.getElementById('demo1').innerHTML=('sign is +');
}
else if (r<0 && t<0 && w>0){
    document.getElementById('demo1').innerHTML=('sign is +');
}
else {
    document.getElementById('demo1').innerHTML=('sign is -');
}


if (r*w*t<0){
document.write("sign is -");
}else {
    document.write("sign is +");
}




/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
 let a= 0 ;
 let b= -1 ;
 let c= 4 ;
 
if (a<b && b<c){
    document.getElementById('demo2').innerHTML= (c+","+b+","+a)
  }
  else if (a<b && c<b){
    document.getElementById('demo2').innerHTML= (b+","+c+","+a)
  }
  else if (b<a && a<c){
    document.getElementById('demo2').innerHTML= (c+","+a+","+b)
  }
  else if (b<a && c<a){
    document.getElementById('demo2').innerHTML= (a+","+c+","+b)
  }
  else if (c<a && a<b){
    document.getElementById('demo2').innerHTML= (b+","+a+","+c)
  }
else {
    (a+","+b+","+c)
}
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */
/****** Start Your Code *********/
let A=-5;
let B=-2;
let C=-6;
let D=0;
let E=-1;
if (A>B && A>C && A>D && A>E){
alert(A)
}
else if (B>A && B>C && B>D && B>E){
    alert(B)
}
else if (C>A && C>B && C>D && C>E){
    alert(C)
}
else if (D>A && D>B && D>C && D>E){
    alert(D)
}
else {
    alert(E)
}
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  let h =1;
  let z = 2;
  if (h>z){
    document.getElementById('demo3').innerHTML= ('hello world')
  } else {
    document.getElementById('demo3').innerHTML= ('goodbye')
  }
 /******* End Your Code ********* */



