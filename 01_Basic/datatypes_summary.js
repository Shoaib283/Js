// primitive
 // 7 types: string, number, boolean, null, undefined, symbol, bigint
const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId );



 // non-primitive (refrence)
 //Array, objects, functions


const heros =["shoaib", "doga", "shaktiman"];
let myObj = {
    name: "alam",
    age: 22,
}

const myfunction = function(){
    console.log("hello World");
    
}

//console.log(typeof isloggedin);


// ***********************

// Stake(Primitive), Heap(Non-Primitive)
  let myyoutubename = "shoaibalam  "

  let anothername = myyoutubename
  anothername = "chaiorcode"

  console.log(myyoutubename);
  console.log(anothername);

  let userOne = {
    email: "user@google.com",
    easypaisa: "easy@ep"
  }

  let userTwo = userOne

  userTwo.email = "shoaib@google.com"
console.log(userOne.eamil);
console.log(userTwo.email);



  


