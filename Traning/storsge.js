let T= document.getElementById('txt')
if (localStorage.length >0) {
    T.value = localStorage.getItem('input')
}

T.onkeyup = function (){
    localStorage.setItem('input', T.value)
}

let T2= document.getElementById('txt2')
if (sessionStorage.length >0) {
    T2.value = sessionStorage.getItem('input2')
}

T2.onkeyup = function (){
    sessionStorage.setItem('input2', T2.value)
}

