class Person{
    getSleep(){
        console.log(`I am Happy Person And I will sleep 10 hours`);
    }
}

class Student extends Person{
    getSleep(){
        console.log(`I am Happy Student And I will sleep 6 hours`)
    }

}

class NextLevelDeveloper extends Person{
    getSleep(){
        console.log(`I am Happy NextLevelDeveloper And I will sleep 4 hours`)
    }
}


const getSleepingHours = (param: Person)=>{
    param.getSleep();
};


const person1= new Person();
const person2= new Student();
const person3= new NextLevelDeveloper();

getSleepingHours(person2);