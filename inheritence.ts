class Student{
    name:string;
    address:string;
    age:number;

    constructor(name:string, address:string, age:number){
         this.name=name;
         this.address=address;
         this.age=age;
    }

    getInformation(numberOfHours:number){
        console.log(`I am ${this.name}. I am from ${this.address}. I am ${this.age} years old.I sleep for ${numberOfHours} hours.`)
    }
}

const student = new Student("Shakil","Dhaka",26) 

student.getInformation(8)