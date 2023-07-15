function flag() {
   let x = document.getElementById("con").value;
   if (x=='Jordan') {
    document.getElementById("fimg").src='jor.PNG';
   }
   else if (x=='Palestain'){
    document.getElementById("fimg").src= 'pa.PNG';
   }
   else {
    document.getElementById("fimg").src= 'ej.PNG';
   }
}