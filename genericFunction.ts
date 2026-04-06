// const createArrayWithString = (value : string ) =>[value];

// const createArrayWithNumber = (value : number ) =>[value];

// const createArrayWithUserObj = (value : { id: number; name: string } ) =>{ return [value] };

// const arrString = createArrayWithString("Shakil");
// const arrNumber = createArrayWithNumber(42);
// const arrUserObj = createArrayWithUserObj({ id: 12345 , name: "Programmer" });


const createArrayWithGeneric = <T> ( value : T ) =>
{
    return [value];
}

const arrString = createArrayWithGeneric("Shakil");
const arrNumber = createArrayWithGeneric(42);
const arrUserObj = createArrayWithGeneric({ id: 12345 , name: "Programmer" });


const createArrayTupleWithGeneric = < X , y > ( value1 : X , value2 : y ) => [ value1 , value2 ]

const res1 = createArrayTupleWithGeneric ("Shakil",45);
const res2 = createArrayTupleWithGeneric ( { id: 12345 , name: "Programmer" } , [1,2,3] );



const addStudentToCourse = <T>(studentInfo:T)=>{
    return {

        course: "Next Level",
        ...studentInfo

    };
}

const student2 = {
    id:12345,
    name:"Nabil",
    age:25,
    hasCar:false
}

const student1 = {
    id:12345,
    name:"Shakil",
    age:30
}


const res3= addStudentToCourse(student2);
console.log(res3);