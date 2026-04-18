const arrayOfNum  : number[] = [1,2,3];
const arrayOfStrings  : string[] = ["1","2","3"];


const x : string[] = arrayOfNum.map((num) => num.toString());
console.log(x); // Output: ["1", "2", "3"]


type AreaOfNum = {
    height: number;
    width:number;
}

// type AreaofString = {
//     height: string;
//     width: string;
// }

// type AreaofString = {
//     [key in "height" | "width"]: string;
// }


type AreaofString = {
    [key in keyof AreaOfNum]: string;
}