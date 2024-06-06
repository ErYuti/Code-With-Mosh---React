const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6,];

//old 
const com = arr1.concat(arr2);

//new
const combined = [...arr1, 'a', ...arr2 , 'b'];
console.log(combined);



// -------------------------------
const clone = [...arr1];
console.log(clone);



//------------------------------
const obj1 = {name : 'yuti'};
const obj2 = {jobs : 'programmer'};

const object = {...obj1, ...obj2, location:'palghar'};
console.log(object);



//--------------------------------
const clone1 = {...obj1};
console.log(clone1)