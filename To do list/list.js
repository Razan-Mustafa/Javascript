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
    if(mood=="create"){ // the button is in the create state
    array.push(ob)
    } else{            // the button is in the update state // this operation when click on the update
        array[i2] = ob; //to save the updated data in the array by(array i2 is updated index = the ob that take this value)
        mood = "create"   //to back to the create state
        submit.innerHTML = "create" // to change the button text to create
    }

    localStorage.setItem("input", JSON.stringify(array))
    readdata()
    cleardata()
    console.log(array)
}

// to clear text after click add
function cleardata(){
    text.value = ""
}

// to create the div of task name and button of delete and update
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

    document.getElementById("data").innerHTML=div; // to put the div in line 42 in html

    // to create button of clear all data 
    let btndelete = document.getElementById("deleteall")
    if (array.length >= 1){
        btndelete.innerHTML =`
        <button id="delete" onclick="clearall() "> Delete All </button> 
        `
    }else{ // if the data is empty then the delete button will be disappear
        btndelete.innerHTML =" "  
    }
}
readdata()

//to delete one item
function deleteone(i){
 const isConfirmed = confirm("Are you sure you want to delete this item?"); //to ask user to confirm the delete the item
  if (isConfirmed) {
    console.log("Item deleted!");
    array.splice(i,1)                //i is the index of item and cut one item (that have this index)
    localStorage.input = JSON.stringify(array) //again update the array in localStorage
  }
 readdata() //to reload the datain webpage
 
}

// btndelete to delete all items
function clearall(){
    const isConfirmed = confirm("Are you sure you want to delete all items?");
        if (isConfirmed) {
        console.log("Item deleted!");
        localStorage.clear() //to clear all items in localStorage
        array.splice(0)      //to clear all items in the array (in webpage)
        }
    readdata()  // after clearall reload read a data to clear items from webpage
}


//this function operate when click on update icon
// to put the value in input field and to change the button text to update 
//we go to line 21 when click on update button
function update(i){
    text.value = array[i].text
    submit.innerHTML = "Update" //to change the button text to update instead of create
    mood="update"
    i2= i          //to take the i outside the scope of the function
    text.focus()
    scroll({ top: 0, behavior: "smooth" });
}

function searchdata(value){ //the value is in the search input
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
     }document.getElementById("data").innerHTML=div; //to display just the data that includes the value in search
}
