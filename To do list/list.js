submit = document.getElementById("btnadd")
text = document.getElementById("add")
data = document.getElementById("data")

let mood="create"
let array;
let i2;
if(localStorage.input != null){
    array = JSON.parse(localStorage.input) 
}else{
  array= [];  
}

submit.onclick = function(){
    let ob = {
        text: text.value.toLowerCase(),
    }
    if(mood=="create"){
    array.push(ob)
    } else{
        array[i2] = ob;
        mood = "create"
        submit.innerHTML = "create"
    }

    localStorage.setItem("input", JSON.stringify(array))
    readdata()
    cleardata()
    console.log(array)
}

function cleardata(){
    text.value = ""
}


function readdata(){
    let div = " "
 for(let i=0; i<array.length; i++){
    div += `
    <div id="out"> 
    <p id="outp">${i+1 } - ${array[i].text } </p>
    <div id="b">
        <button  onclick="update(${ i } )"> <i class="bi bi-pencil-square"></i></button>    
        <button  onclick="deleteone(  ${ i })"> <i class="bi bi-trash3-fill"></i></button>
    </div>
    </div> `
}
    document.getElementById("data").innerHTML=div;

    let btndelete = document.getElementById("deleteall")
    if (array.length >= 1){
        btndelete.innerHTML =`
        <button id="delete" onclick="clearall() "> Delete All </button> 
        `
    }else{
        btndelete.innerHTML =" "  
    }
}
readdata()

function deleteone(i){
 const isConfirmed = confirm("Are you sure you want to delete this item?");
  if (isConfirmed) {
    console.log("Item deleted!");
    array.splice(i,1)
    localStorage.input = JSON.stringify(array)
  }
 readdata()
 
}

function clearall(){
    const isConfirmed = confirm("Are you sure you want to delete all items?");
        if (isConfirmed) {
        console.log("Item deleted!");
        localStorage.clear()
        array.splice(0)
        }
    readdata()
}




function update(i){
    text.value = array[i].text
    submit.innerHTML = "Update"
    mood="update"
    i2= i
    scroll({top:0, behavior:"smooth"})
    text.focus()
}

function searchdata(value){
    let div = ""
    for (let i=0; i<array.length; i++){
        if (array[i].text.includes(value.toLowerCase())){
            div += `
            <div id="out"> 
            <p id="outp">${i+1 } - ${array[i].text } </p>
            <div id="b">
                <button onclick="update(${ i } )"> <i class="bi bi-pencil-square"></i></button>    
                <button onclick="deleteone(  ${ i }   )"> <i class="bi bi-trash3-fill"></i></button>
            </div>
            </div> `
        }
    
 }document.getElementById("data").innerHTML=div;
}
