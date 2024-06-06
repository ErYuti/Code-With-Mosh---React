const address = {
    street: '',
    city: '',
    country:''
};

//old
// const street = address.street;
// const city = address.city;
// const country = address.country;

//new 
const{ street, city, country } = address;
const{ street:st } = address;
console.log(street, city, country, st);