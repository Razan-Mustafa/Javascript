// number
'"age":30'
// srting
'"name":"John"'
// object
'{"name":"John", "age":30, "city":"New York"}'
// array
'["Ford", "BMW", "Audi", "Fiat"]'
// Boolean
'{"sale":true}'
// null
'{"middlename":null}'



const arr = ["Razan", "noor", "Sally", "majd"];
const myJSON = JSON.stringify(arr);
console.log (myJSON);
console.log(typeof myJSON);

const obj = {name: "John", age: 30, city: "New York"};
const myJSON2 = JSON.stringify(obj);
console.log(myJSON2);
console.log(typeof myJSON2);



const myJSONp = JSON.parse(myJSON);
console.log (myJSONp);
console.log(typeof myJSONp);



const myJSON2p = JSON.parse(myJSON2);
console.log(myJSON2p);
console.log(typeof myJSON2p);


const txt = '{"name":"John", "age":30, "city":"New York"}'
const objc = JSON.parse(txt);
document.getElementById("demo").innerHTML = objc.name + ", " + objc.age;

// Date objects are not allowed in JSON.
// If you need to include a date, write it as a string.
// You can convert it back into a date object later:
const text = '{"name":"Razan", "birth":"1998-06-23", "city":"New York"}';
const obj3 = JSON.parse(text);
// document.getElementById("demo1").innerHTML = obj3.name + ", " + obj3.birth; 
obj3.birth = new Date(obj3.birth);
document.getElementById("demo1").innerHTML = obj3.name + ", " + obj3.birth; 