// // function addition(num1:number, num2:number):number{
// //     return num1 + num2;
// // }

// // const add = addition(5,5);
// // console.log(add);


// const addArrow =(a:number, b:number):number =>a+b

// const add = addArrow(5,6 );
// console.log(add);


// let anything: any;
// anything = 5;
// (anything as number).


const example =(input:number | string) => {
    return input;
};

const result1 = example(5);
const result2 = example("Shakil");
