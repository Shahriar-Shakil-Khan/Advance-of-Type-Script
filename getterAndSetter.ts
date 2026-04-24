class BankAccount{
   public readonly userId:number;
    public userName:string;
    private userBalance:number;

    constructor(userId:number,userName:string,userBalance:number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
        
    }
    
    //Set method
    // addBalance(amount:number){
    //    return this.userBalance = this.userBalance + amount;
    // }

     set addBalance(amount:number){
        this.userBalance = this.userBalance + amount;
    }

    //Get method
    // getBalance(){
    //     return this.userBalance;
    // }

    get  getBalance(){
        return this.userBalance;
    }
}


const ShakilAccount =  new BankAccount(101,"Shakil",1500)

// ShakilAccount.addBalance(2300);
// console.log(ShakilAccount.getBalance());
ShakilAccount.addBalance = 300;
console.log(ShakilAccount);