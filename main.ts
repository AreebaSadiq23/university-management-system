class Person{
    name:string;
    age:number;

    constructor(name:string , age:number){
        this.age = age
        this.name=name
    }
};
class Student extends Person{
    rollNumber:number;
    courses : Course[] = [];
    constructor( name:string, age:number,rollNumber:number ){
        super(name,age)
      this.rollNumber = rollNumber
    }
   registerForCourse(course:Course){
    this.courses.push(course);
   }
}

class Instructor extends Person{
    salary:number;
    courses : Course[] = [];
    constructor(name:string, age:number,salary:number ){
        super(name,age) 
      this.salary = salary
    }
   assignCourse(course:Course){
    this.courses.push(course);
   }
}
const std1 = new Student("Areeba",22,1234);
console.log(std1.courses);

const std2 = new Student("Maryam",18,5678);

const instructor1 = new Instructor("wania",20,100000);
const instructor2 = new Instructor("sabeen",20,100000);

class Course {
  id:number;
  name:string;
  students:Student[] =[]
  instructor:Instructor[] =[]

  constructor(id:number,  name:string){
           this.id = id;
           this.name = name
  }

  addStudent(std:Student){
    this.students.push(std)
  }

  seInstructor(instructor:Instructor){
    this.instructor.push(instructor)
  }

}
class Deapartment{
    name:string;
    courses:Course[] =[];
    constructor(name:string){
      this.name = name;

    }
    addCourse(course:Course){
      this.courses.push(course)

    }
}

const course1 = new Course(1,"blockchain")
const course2 = new Course(2,"meatverse")
std1.registerForCourse(course1)

course1.addStudent(std1)
course1.addStudent(std2)
course2.addStudent(std1)


course1.seInstructor(instructor1)
course2.seInstructor(instructor2)


console.log(course1.students);

const d1 = new Deapartment("computer science")
d1.addCourse(course1)
console.log(d1.courses[0]);
