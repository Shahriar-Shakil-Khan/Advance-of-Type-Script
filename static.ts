//static means Jeta poriborton hoy

class Counter{
    static count: number = 0 ;

    static increment(){
        return (Counter.count = Counter.count + 1);
    }

    static decrement(){
        return (Counter.count = Counter.count - 1);
    }
}

// const increment1 = new Counter();
// console.log(increment1.increment());
// console.log(increment1.increment());
// console.log(increment1.increment());
// console.log(increment1.increment());

// const increment2 = new Counter();
// console.log(increment2.increment());
// console.log(increment2.increment());

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());