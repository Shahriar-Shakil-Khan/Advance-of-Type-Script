type Alphaneumeric = string | number ;

const add = (num1:Alphaneumeric, num2:Alphaneumeric)=>{
    if(typeof num1==="number" && typeof num2==="number"){
        return num1+num2;
    }else{
        return num1.toString() + num2.toString();
    }
}

console.log(add(1,"2"));

type NormalUser = {
    name: string;
};

type AdminUser = {
    name: string;
    role:"Admin";
};


const getUserInfo = (user:NormalUser | AdminUser) => {

    if("role" in user ){
        console.log(`${user.name} is an ${user.role}`);
    }else{
        console.log(`${user.name} is a normal user`);
    }
}

getUserInfo({name:"John"});
getUserInfo({name:"Jane", role:"Admin"});