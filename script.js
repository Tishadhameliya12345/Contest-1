/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.filter(person => person.profession === "developer");
  developers.map(dev => console.log(dev));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(person =>{
    if(person.profession === "developer"){
      console.log(person);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const removePerson = arr.filter(person => person.profession !== "admin")
  console.log(removePerson);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
    { id: 5, name: "Tisha", age: "21", profession: "designer" },
    { id: 6, name: "Harsh", age: "20", profession: "developer" },
    { id: 7, name: "Jenish", age: "23", profession: "manager" },
  ];
  let combinedArray = arr.concat(newArray);
  console.log(combinedArray);
}


PrintDeveloperbyMap(arr);
PrintDeveloperbyForEach(arr);
addData(arr);
removeAdmin(arr);
concatenateArray(arr);