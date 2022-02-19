'use strict';

/* const Person = function(fName, birthYear){
    this.fName = fName;
    this.birthYear = birthYear;
    //Never create function inside object
    // this.calcAge = function() {
    //     console.log(2021 - this.birthYear)
    // }
}

const ira = new Person("Ira", 1996)
console.log(ira)

const bidisha = new Person("Bidisha", 1995);
const bobby = new Person("Bobby", 1995);
console.log(bidisha, bobby)

console.log(ira instanceof Person)

//Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function() {
    console.log(2021 - this.birthYear)
}

ira.calcAge();
bidisha.calcAge();
bobby.calcAge();


console.log(ira.__proto__)
console.log(ira.__proto__.__proto__)
console.log(ira.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor)

const arr = [3, 4, 4, 5, 7, 8, 8, 9]
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__)

Array.prototype.unique = function(){
    return [...new Set(this)]
};

console.log(arr.unique())

const h1 = document.querySelector('h1')
console.dir( x => x +1) */

//Class expression
// const PersonCl = class {}

//Class declaration
/* class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear
    }

    calcAge() {
        console.log(2021 - this.birthYear)
    }

    greet() {
        console.log(`Hey ${this.fName}`)
    }

    get age() {
        return 2021 - this.birthYear
    }

    set fullName(name) {
        console.log(name)
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName
    }

}

const ira = new PersonCl('Ira Shrivastava', 1996)
console.log(ira)
ira.calcAge()
console.log(ira.age)

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.fName}`)
// }

ira.greet()

// getters and setters
const account = {
    owner: 'Ira',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov) {
        this.movements.push(mov)
    }

}

console.log(account.latest)
account.latest = 50;
console.log(account.movements) */

/* const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear)
    },

    init(fName, birthYear){
        this.fName = fName;
        this.birthYear = birthYear
    }
}

const ira = Object.create(PersonProto)
ira.name = 'ira';
ira.birthYear = 1996;
ira.calcAge()

const bidisha = Object.create(PersonProto)
bidisha.init('Bidisha', 1995)
bidisha.calcAge() */

// Inheritence btwn classes

/* const Person = function(fName, birthYear){
    this.fName = fName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
    console.log(2021 - this.birthYear)
}

const Student = function(fName, birthYear, course){
    Person.call(this, fName, birthYear);
    this.course = course
}

//Linking prototype
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function() {
    console.log(`My name is ${this.fName} and I study ${this.course}`)
}

const ira = new Student('Ira', 1996, 'Computer Science')
console.log(ira)
ira.introduce()
ira.calcAge()

console.log(ira.__proto__);
console.log(ira.__proto__.__proto__)
console.log(ira instanceof Student)
console.log(ira instanceof Person)


Student.prototype.constructor = Student
console.dir(Student.prototype.constructor) */



//Inheritence btwn classes using ES six
/* class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear
    }

    calcAge() {
        console.log(2021 - this.birthYear)
    }

    greet() {
        console.log(`Hey ${this.fName}`)
    }

    get age() {
        return 2021 - this.birthYear
    }

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName
    }

    //static method
    static hey(){
        console.log('Hey there 👋')
    }

}

class StudentCl extends PersonCl {
    constructor(fName, birthYear, course){
        super(fName, birthYear);
        this.course = course;
    } 
    
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`)
    }

    calcAge() {
        console.log(`I'm ${2021 - this.birthYear} years old, 
                    but as a student I feel more like ${2021 - this.birthYear + 10}`)
    }
}

const ira = new StudentCl('Ira Shrivastava', 1996, 'Computer Science')
ira.introduce()
ira.calcAge() */

// Inheritence btwn classes using Object.create
/* const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear)
    },

    init(fName, birthYear){
        this.fName = fName;
        this.birthYear = birthYear
    }
}

const ira = Object.create(PersonProto)
// ira.name = 'ira';
// ira.birthYear = 1996;
// ira.calcAge()

const StudentProto = Object.create(PersonProto)
StudentProto.init = function(fName, birthYear, course){
    PersonProto.init.call(this, fName, birthYear);
    this.course = course;
}


const bidisha = Object.create(StudentProto)
bidisha.init('Bidisha', 1995, 'Computer Science')

*/
//public fields & methods
//private fields & methods


class Account {
    //public fields
    locale = navigator.language;
    
    //private fields
    #movements = [];
    #pin;


    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        //protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`)
    }

    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val)
        return this;
    }

    withdraw(val) {
        this.deposit(-val)
        return this;
    }

    #approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val)
            console.log('Loan Approved')
        }
        return this;
    }
}

const acc1 = new Account('Ira', 'INR', 1111)
//console.log(acc1)

// acc1._movements.push(250);
// acc1._movements.push(-140)

acc1.deposit(250)
acc1.withdraw(140)
acc1.requestLoan(1000)
//acc1.#approveLoan(1000)
console.log(acc1.getMovements())


//console.log(acc1)
//console.log(acc1.#pin)

//console.log(acc1.#movements)

//chaining
acc1.deposit(300).deposit(500).withdraw(35)
.requestLoan(25000).withdraw(4000)

console.log(acc1)