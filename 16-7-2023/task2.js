let T1= document.getElementById('name')
T1.onkeyup = function (){
    sessionStorage.setItem('input1', T1.value)}


let T2= document.getElementById('Age')
T2.onkeyup = function (){
sessionStorage.setItem('input2', T2.value)}


let T3= document.getElementById('Gender')
T3.onkeyup = function (){
    sessionStorage.setItem('input3', T3.value)}

let T4= document.getElementById('Date')
 T4.input = function (){
sessionStorage.setItem('input4', T4.value)}

// dddddddddddddddiv2
let T1a= document.getElementById('im')
T1a.onchange = function (){
    sessionStorage.setItem('input1a', T1a.value)}


let T2a= document.getElementById('des')
T2a.onkeyup = function (){
sessionStorage.setItem('input2a', T2a.value)}


let T3a= document.getElementById('un')
T3a.onkeyup = function (){
    sessionStorage.setItem('input3a', T3a.value)}

let T4a= document.querySelectorAll('lang')
 T4a.forEach(checkbox) = function (){
sessionStorage.setItem('input4a', T4a.value)}



function on(){
    document.getElementById("d").style = "border: 1px solid black; display: inline-block; margin: 5px; padding: 5px" ;
    document.getElementById("n").innerHTML = `Name: ${T1.value}`;
    document.getElementById("a").innerHTML = `Age: ${T2.value}`;
    document.getElementById("G").innerHTML = `Gender: ${T3.value}`;
    document.getElementById("dat").innerHTML = `Date: ${T4.value}`;

    document.getElementById("d2").style = "border: 1px solid black; display: inline-block; margin: 5px; padding: 5px" ;
    document.getElementById("i").innerHTML = `your image: ${T1a.value}`;
    document.getElementById("dd").innerHTML = `Discription: ${T2a.value}`;
    document.getElementById("u").innerHTML = `Major & university: ${T3a.value}`;
    document.getElementById("la").innerHTML = `Programming languages: ${T4a.value}`;
}


