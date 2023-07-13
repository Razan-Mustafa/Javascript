const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
//   document.getElementById("demo").innerHTML =
//   person.firstName + " is " + person.age + " years old.";
  document.getElementById("demo").innerHTML = person.eyeColor;

  const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object:
  document.getElementById("demo1").innerHTML = person1.fullName();


  const person3 = {
    firstName: "John",
    lastName: "Doe",
    car :{ namecar: "BMW"},
    id: ['8855' ,'7466' ,'9920'],
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object:
  document.getElementById("demo2").innerHTML = person3.fullName();
  document.getElementById("demo3").innerHTML = person3.id[0];
  person3.firstName = "Razan";
  document.getElementById("demo4").innerHTML = person3.fullName();
  document.getElementById("demo5").innerHTML = person3.car.namecar();

  let y = 50;
  for (y=0){
    
  }
