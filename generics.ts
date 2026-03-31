type GenericArray<value> = Array<value>;

// const frineds: string [] = ["shakil","Rafi","Taki"];
// const frineds: Array<string> = ["shakil","Rafi","Taki"];

const frineds: GenericArray<string> = ["shakil","Rafi","Taki"];

//  const rollNumbers: number [] = [45,21,43];
// const rollNumbers: Array<number> = [45,21,43];


//  const isEligibleList: boolean [] = [true,false,true];
// const isEligibleList: Array<boolean> = [true,false,true];



const rollNumbers: GenericArray<number> = [45,21,43];
const isEligibleList: GenericArray<boolean> = [true,false,true];


type coordinate < X , Y > = [ X , Y ];
const coordinate1: coordinate < number , number > = [45, 21];
const coordinate2: coordinate < string , string > = ["45", "21"];



const userList:GenericArray<{name:string,age:number}> = [
    {
        name:"shakil",
        age:21
    },
    {

        name:"Rafi",
        age:22
    },
    
    {

        name:"Taki",
        age:23
    }
]