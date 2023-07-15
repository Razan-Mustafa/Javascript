if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good day!";
  }
  
  
  const hour = new Date().getHours();
  let say;
  if (hour < 18) {
    say = "Good day";
  } else {
    say = "Good evening";
  }
  document.getElementById("demo2").innerHTML = say;

  if (hour <12) {
    say = "Good morning";
  }
  else if (hour<18) {
    say = "Good afternoon";
  }
  else {
    say = "Good evening";
  }
  document.getElementById("demo3").innerHTML = say;


  let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo4").innerHTML = "Today is " + day;



const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo5").innerHTML = text;


let text2 = "";
let i = 0;
while (i <= 10) {
  text2 += "<br>The number is " + i;
  i++;
}
document.getElementById("demo6").innerHTML = text2;




let text3 = ""
let y = 0;
do {
  text3 += "<br>The number is " + y;
  y++;
}
while (y < 10); 
document.getElementById("demo7").innerHTML = text3;

v= '5'
console.log(parseFloat(v+'na'));
console.log(typeof v);

console.log(w=new String(v));
console.log(typeof w);
console.log(w);

switch (op){
  case 'number'
}
