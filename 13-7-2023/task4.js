function family() {
  let x = document.getElementById("family").value;
  if (x=='Times New Roman') {
   document.getElementById("textarea").style='font-family:Times New Roman';
  }
  else if (x=='sans-serif'){
    document.getElementById("textarea").style='font-family:sans-serif ';
  }
  else {
    document.getElementById("textarea").style='font-family:fantasy ';
  }
}


function font() {
  let x = document.getElementById("size").value;
  if (x=='10px') {
   document.getElementById("textarea").style='font-size: 10px';
  }
  else if (x=='15px'){
    document.getElementById("textarea").style='font-size: 15px';
  }
  else {
    document.getElementById("textarea").style='font-size: 20px';
  }
}


let checkbox = document.getElementById("Bold");

checkbox.onclick = function() {
  if (this.checked) {
    document.getElementById('textarea').style='font-weight: bold';
  } else {
    document.getElementById('textarea').style='font-weight: normal';
  }
};

let checkbox2 = document.getElementById("italic");

checkbox2.onclick = function() {
  if (this.checked) {
    document.getElementById('textarea').style='font-style:italic';
  } else {
    document.getElementById('textarea').style='font-weight: normal';
  }
};

let checkbox3 = document.getElementById("u");

checkbox3.onclick = function() {
  if (this.checked) {
    document.getElementById('textarea').style= 'text-decoration: underline';
  } else {
    document.getElementById('textarea').style='font-weight: normal';
  }
};