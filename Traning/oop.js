// let r= document.getElementById("hassan");
// // r.classList.toggle("name")

// /*r.onclick =function (){
//     r.classList.add("name")
// }
// r.oncontextmenu =function (){
//     r.classList.remove("name")
// }

// r.onclick =function (){
//     r.classList.toggle("name")
// }*/
// // r.textContent = "hassan"
// // r.innerHTML = "<h1>hassan"
// h=document.createTextNode("tala")
// r.appendChild(h)
// r.textContent = "hassan"

class Car {
    constructor(make, model) {
      this.make = make ;
      this.model = model;
      this.isEngineStarted = false;
    }
  
    startEngine() {
      this.isEngineStarted = true;
      console.log('Engine started.');
    }
  
    stopEngine() {
      this.isEngineStarted = false;
      console.log('Engine stopped.');
    }
  
    drive() {
      if (this.isEngineStarted) {
        console.log('Car is now driving.');
      } else {
        console.log('Please start the engine first.');
      }
    }
  }
  
  const myCar = new Car('Toyota', 'Camry');
  myCar.startEngine();
  myCar.drive();
  myCar.stopEngine();