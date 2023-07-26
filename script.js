//complete this code
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }
}

class Student extends Person {
    study() {
        console.log(`${this._name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this._name} is teaching`);
    }
}
const student1 = new Student("Alice", 20);
student1.study();

// Creating a Teacher object
const teacher1 = new Teacher("Bob", 35);
teacher1.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
