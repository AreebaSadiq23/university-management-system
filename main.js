"use strict";
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
;
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
const std1 = new Student("Areeba", 22, 1234);
console.log(std1.courses);
const std2 = new Student("Maryam", 18, 5678);
const instructor1 = new Instructor("wania", 20, 100000);
const instructor2 = new Instructor("sabeen", 20, 100000);
class Course {
    constructor(id, name) {
        this.students = [];
        this.instructor = [];
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
    }
    seInstructor(instructor) {
        this.instructor.push(instructor);
    }
}
class Deapartment {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const course1 = new Course(1, "blockchain");
const course2 = new Course(2, "meatverse");
std1.registerForCourse(course1);
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);
course1.seInstructor(instructor1);
course2.seInstructor(instructor2);
console.log(course1.students);
const d1 = new Deapartment("computer science");
d1.addCourse(course1);
console.log(d1.courses[0]);
