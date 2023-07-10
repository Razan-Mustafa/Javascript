/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
let k=85;

if (k<50){
    document.getElementById('demo4').innerHTML= ('Fail')
}
else if (k<=50 && k<=59){
    document.getElementById('demo4').innerHTML= ('E')
}
else if (k<=60 && k<=69){
    document.getElementById('demo4').innerHTML= ('D')
}
else if (k<=70 && k<=79){
    document.getElementById('demo4').innerHTML= ('C')
}
else if (k<=80 && k<=89){
    document.getElementById('demo4').innerHTML= ('B')
}
else {
    document.getElementById('demo4').innerHTML= ('A')
}
