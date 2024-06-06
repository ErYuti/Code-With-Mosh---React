class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walking');
    }
}

class Teacher extends Person{
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log('taching');
    }
}

const teacher = new Teacher('jaee', 'Btech');
teacher.degree;
teacher.name;