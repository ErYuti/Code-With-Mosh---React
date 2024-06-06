const squ = function(number) {
    return number * number;
}


//Arrow function
// const square = ((num) => {
//     return num * num;
// });
const square = num => num * num;
square(5);


// ----------------------
const jobs = [
    { id:1, isActive: true },
    { id:2, isActive: true },
    { id:3, isActive: false },
];

const activeJobs = jobs.filter(function (job)  { return job.isActive; });
const activeJobs1 = jobs.filter(job => job.isActive);



// -------------------------------------
// Arrow function and this

//old
// const person = {
//     talk() {
//         var self = this;
//         setTimeout(function() {
//             console.log('self', self);
//         },1000)
//     }
// };


//new
const person = {
    talk() { 
        setTimeout(() => {
            console.log('this', this)
        },1000)
    }
};
person.talk();
