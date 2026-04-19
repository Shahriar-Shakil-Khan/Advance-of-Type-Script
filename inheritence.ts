// class Student{
//     name:string;
//     address:string;
//     age:number;

//     constructor(name:string, address:string, age:number){
//          this.name=name;
//          this.address=address;
//          this.age=age;
//     }

//     getInformation(numberOfHours:number){
//         console.log(`I am ${this.name}. I am from ${this.address}. I am ${this.age} years old.I sleep for ${numberOfHours} hours.`)
//     }
// }

// const student = new Student("Shakil","Dhaka",26) 

// student.getInformation(8)


class Parents{
    name:string;
    address:string;
    age:number;

    constructor(name:string, address:string, age:number){
        this.name=name;
        this.address=address;
        this.age=age;
    }
    getInformation(numberOfHours:number){
        console.log(`I am ${this.name}. I am from ${this.address}. I am ${this.age} years old.I sleep for 
        ${numberOfHours} hours.`)
    }

} 

class Student extends Parents{}

class Teacher extends Parents{
    designation:string;

    constructor(name:string, address:string, age:number, designation:string){
        super(name, address, age);
        this.designation = designation;
    }
    getInformation1(numberOfHours:number){
        console.log(`I am ${this.name}. I am from ${this.address}. I am ${this.age} years old.I sleep for 
        ${numberOfHours} hours.i am a ${this.designation}.`)
    }
}


// For student
const student = new Student("Shakil","Dhaka",26) 
student.getInformation(9)

//For Teacher
const teacher = new Teacher("Nabil","Khulna",21,"pharmacist") 
teacher.getInformation1(20)