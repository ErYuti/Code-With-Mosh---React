import { Person } from "./personModule1";

export function promote() {}

export default class Teacher extends Person{
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log('taching');
    }
}

