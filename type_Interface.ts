type User = {
    name: string;
    age:number;
}

interface IUser{
    name: string;
    age:number;
}

type Role = {
    role: 'admin' | 'user';
}

type UserWithRole = User & Role ;

const user1: User & UserWithRole = {
    name: "Shakil",
    age:25,
    role:'admin'
}
const user2:IUser = {
    name: "Nabil",
    age:20,
}

interface IUserWithRole extends IUser{
    role : 'admin' | 'user';
}

type Add = (num1:number, num2:number)=> number;

const add: Add = (num1, num2) => num1 + num2;


type Friends = string[];

interface Ifriends{
    [index: number]: string;
}

const friends: Ifriends = ["Shakil", "Nabil", "Sabbir"];

