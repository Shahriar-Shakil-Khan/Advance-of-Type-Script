// constraint = strict rules deya

type student ={
    id: number;
    name: string;
    dateOfBirth: string;
    class: string;
}

const addStudentToCourse = <T extends student>(studentInfo:T)=>{
    return {

        course: "Next Level",
        ...studentInfo

    };
}

const student2 = {
    id:12345,
    name:"Nabil",
    age:25,
    hasCar:false,
    dateOfBirth: "1998-01-01",
    class: "10th Grade"
}

const student1 = {
    id:12345,
    name:"Shakil",
    age:30
}


const res3= addStudentToCourse(student2);
console.log(res3);