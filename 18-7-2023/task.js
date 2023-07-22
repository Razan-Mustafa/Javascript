async function Data() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const mydata = await response.json();
    console.log(mydata);
    
    

      let t =document.getElementById("table")
      for (let i=0 ; i<mydata.length ; i++){
      let tr =document.createElement("tr")
      t.appendChild(tr)
      let td1 =document.createElement("td")
      tr.appendChild(td1)
      td1 .textContent = mydata[i].id
      let td2 =document.createElement("td")
      tr.appendChild(td2)
      td2 .textContent = mydata[i].category
      let td3 =document.createElement("td")
      tr.appendChild(td3)
      td3 .textContent = mydata[i].description
      let td4 =document.createElement("td")
      tr.appendChild(td4)
      td4 .textContent = mydata[i].price
      let td5 =document.createElement("td")
      tr.appendChild(td5)
      let im =document.createElement("img")
      im.src = mydata[i].image
      td5.appendChild(im)
      im.style= "width:100px"

  
} } 
  catch (error) {
  }
  }