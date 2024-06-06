//Var  --  function
// Let  -- block
// Const -- block




//var 
//function Scope
// function sayHello() {
//     console.log('Staring of for loop :')
//     for(var i=0; i < 5; i++){
//         console.log(i);
//     }
//     console.log('Ending of for loop :')
//     console.log(i);
// }
// sayHello();



// ----------
//let
//block Scope
function sayHello() {
    for(let i=0; i < 5; i++){
        console.log(i);
    }
}
sayHello();




// ----------
//const
//block Scope
//can't reassign / redeclare
const x = 1;
x = 2;
console.log(x);