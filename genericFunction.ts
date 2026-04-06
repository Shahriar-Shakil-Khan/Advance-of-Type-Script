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

