function mouseOver(){
    document.getElementById('div').innerHTML= 'Hello World'
}
function mouseOut(){
    document.getElementById('div').innerHTML= 'can I help you?'
}

document.getElementById("div").addEventListener("mouseover", mouseOver);
document.getElementById("div").addEventListener("mouseout", mouseOut);