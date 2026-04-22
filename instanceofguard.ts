class Person{
name : string;
    constructor(name:string){
    this.name = name;
}

getSleep(numOfHours: number){
    console.log(`${this.name} is sleeping for ${numOfHours} hours.`);
    }
}

class Student extends Person{

    constructor(name:string){
        super(name);
    }

    doStudy(numOfHours: number){
        console.log(`${this.name} is studying for ${numOfHours} hours.`);
    }

}

class Teacher extends Person{

    constructor(name:string){
        super(name);
}

    takeClass(numOfHours: number){
    console.log(`${this.name} is taking a class for ${numOfHours} hours.`);
}

}

const isStudent = (user:Person)=>{
    return user instanceof Student;
}

const isTeacher = (user:Person)=>{
    return user instanceof Teacher;
}



const getUserInfo = (user : Person ) => {
    if(isStudent(user)){
        user.doStudy(10);
    }else if(isTeacher(user)){
        user.takeClass(7);
    }else{
        user.getSleep(16)
    }
}

const person1 = new Person("Mr. Sami");
const student1 = new Student("Mr. Shakil");
const teacher1 = new Teacher("Dr. Anika");

getUserInfo(person1);
getUserInfo(student1);
getUserInfo(teacher1);
