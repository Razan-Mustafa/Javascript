//Implement all the ecxersices using Javascript ES6

// Excersice 1: Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one. 
  const obj1 = { name: 'John', age: 30 };
  const obj2 = {age: 30, name: 'John' };
  
  function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1); //   array contain only keys ["name", "age"]
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
      return false;
    }
  // console.log("hello")    // if (if = false) function will stop
    let result = true;
    keys1.forEach(key => {
      if (obj1[key] !== obj2[key]) {
        result = false;
      }
    });
    return result;
  }
  
  console.log( compareObjects(obj1, obj2))


// Excersice 2: Write a JavaScript program to copy a string to the clipboard. 

function copy (txt){
  txt = document.getElementById("text").innerHTML;
  navigator.clipboard.writeText(txt)
  alert("copied to clipboard")
}



// Excersice 3: Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array. 
const csvString = '1,John,Doe\n2,Jane,Smith\n3,Bob,Johnson';
function csvToArray(csvString) {
    const rows = csvString.split('\n');
    const result = [];
  
    rows.forEach(row => {
      const values = row.split(',');
      result.push(values);
    });
  
    return result;
  }
  
  const result = csvToArray(csvString);
  console.log(result);
 
  
// Excersice 4: Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row. 

const str = 'id,first_name,last_name\n1,John,Doe\n2,Jane,Smith\n3,Bob,Johnson'
function csvToObjectArray(csvString) {
  const rows = csvString.split('\n');  //['id,first_name,last_name', '1,John,Doe', '2,Jane,Smith', '3,Bob,Johnson']
  const titles = rows[0].split(',');  //['id', 'first_name', 'last_name']
  const bigarray = [];

  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(','); // ["1", "john" ,"doe"]
    
    const obj = {};
    for (let j = 0; j < titles.length; j++) {
      obj[titles[j]] = values[j]; 
    }
    bigarray.push(obj);
  }

  return bigarray;
}

const result1 = csvToObjectArray(str);
console.log(result1);


// Excersice 5:Write a JavaScript program to convert an array of objects to a comma-separated values (CSV) string that contains only the columns specified. 
// function arrayToCSV(data, columns) {
//   // Extract the values for the specified columns from each object
//   const csvRows = data.map(obj => columns.map(column => obj[column]));

//   // Join the values with commas and add newlines for each row
//   const csvContent = csvRows.map(row => row.join(',')).join('\n');

//   return csvContent;
// }

// // Test data
// const data = [
//   { name: 'John', age: 30, city: 'New York' },
//   { name: 'Jane', age: 25, city: 'San Francisco' },
//   { name: 'Bob', age: 40, city: 'Chicago' }
// ];

// // Columns to include in the CSV
// const columnsToInclude = ['name', 'age'];

// // Convert the data to a CSV string containing only the specified columns
// const csvString2 = arrayToCSV(data, columnsToInclude);
// console.log(csvString2);

// Excersice 6: Write a JavaScript program to target a given value in a nested JSON object, based on the given key. 

// Excersice 7: Write a JavaScript program to converts a specified number to an array of digits. 

// Excersice 8: Write a JavaScript program to filter out the specified values from an specified array. Return the original array without the filtered values. 

// Excersice 9: Write a JavaScript program to combine the numbers of a given array into an array containing all combinations. 

// Excersice 10: Write a JavaScript program to extract out the values at the specified indexes from an specified array. 

// Excersice 11: Write a JavaScript program to generate a random hexadecimal color code. 

// Excersice 12: Write a JavaScript program to removes non-printable ASCII characters from a given string. 

// Excersice 13:Write a JavaScript program to convert the length of a given string in bytes. 

// Excersice 14: Write a JavaScript program to replace the names of multiple object keys with the values provided. 

// Excersice 15: Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set comparing rule. 

// Excersice 16: Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise. 

// Excersice 17: Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group. 

// Excersice 18: Write a JavaScript program to remove specified elements from the left of a given array of elements. 

// Excersice 19: Write a JavaScript program to remove specified elements from the right of a given array of elements. 

// Excersice 20: Write a JavaScript program to extend a 3-digit color code to a 6-digit color code. 

// Excersice 21: Write a JavaScript program to get every nth element in an given array. 

// Excersice 22:Write a JavaScript program to filter out the non-unique values in an array. 

// Excersice 23: Write a JavaScript program to filter out the non-unique values in an array, based on a provided comparator function. 

// Excersice 24: Write a JavaScript program to dcapitalize the first letter of a string. 

// Excersice 25: Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays. 

// Excersice 26: Write a JavaScript program that will return true if the string is y/yes or false if the string is n/no. 

// Excersice 27: Write a JavaScript program to find every element that exists in any of the two given arrays once, using a provided comparator function. 

// Excersice 28: Write a JavaScript program to measure the time taken by a function to execute. 

// Excersice 29: Write a JavaScript program to convert a value to a safe integer. 

// Excersice 30: Write a JavaScript program to filter out the element(s) of an given array, that have one of the specified values. 

// Excersice 31: Write a JavaScript program to find all elements in an given array except for the first one. Return the whole array if the array's length is 1. 

// Excersice 32: Write a JavaScript program to get the sum of an given array, after mapping each element to a value using the provided function. 

// Excersice 33: Write a JavaScript program to get a random number in the specified range. 

// Excersice 34: Write a JavaScript program to get a random integer in the specified range. 

// Excersice 35: Write a JavaScript program to get an array of given n random integers in the specified range. 

// Excersice 36:Write a JavaScript program to create a function that invokes each provided function with the arguments it receives and returns the results. 

// Excersice 37:Write a JavaScript program to get a sorted array of objects ordered by properties and orders. 

// Excersice 38: Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length. 

// Excersice 39: Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object. 

// Excersice 40: Write a JavaScript program to create an array of key-value pair arrays from an given object. 

// Excersice 41: Write a JavaScript program to create an object from the given key-value pairs. 

// Excersice 42: Write a JavaScript program to get a customized coalesce function that returns the first argument that returns true from the provided argument validation function. 

// Excersice 43: Write a JavaScript program to change function that accepts an array into a variadic function. 

// Excersice 44: Write a JavaScript program to remove falsey values from an given array. 
