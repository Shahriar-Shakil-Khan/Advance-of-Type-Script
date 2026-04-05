interface Developer <T>{
    name: string;
    salary: number;
    device:{
        brand: string;
        model: string;
        releasedYear: string;
    };

    smartWatch: T
}


const poorDeveloper : Developer <{

    brand: string;
    model: string;
    releasedYear: string;
}> = {
    
    name:"Shakil",
    salary:20,
    device: {
        brand: 'Dell',
        model: 'XPS 13',
        releasedYear: '2022'
    },
    smartWatch: {
        brand: 'Apple',
        model: 'Apple Watch Series 6',
        releasedYear: '2021'
    }
}