let x = document.getElementById('c')

function color(){
    document.body.style.backgroundColor = x.value;
    sessionStorage.setItem('col',x.value);
}

document.body.style.backgroundColor = sessionStorage.getItem('col');
