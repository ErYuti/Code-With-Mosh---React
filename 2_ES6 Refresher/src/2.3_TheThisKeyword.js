//always written reference to the current objects

const person = {
    name : 'yuti',
    walk() {
        console.log(this);
    }
};
//reference to the person object
person.walk();


//bcz strick mode
const walk = person.walk;
console.log(walk);
walk();

//reference written global object, window object

// ---------------------------------------------------------
//Binding this

//new written new instance walk function and set to this person objects
const walk1 = person.walk.bind(person);
walk1();