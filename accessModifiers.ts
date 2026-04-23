class BankAccount{
   public readonly userId:number;
    public userName:string;
    private userBalance:number;

    constructor(userId:number,userName:string,userBalance:number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
        
    }

    addBalance(amount:number){
        this.userBalance = this.userBalance + amount;
    }
}


const ShakilAccount =  new BankAccount(101,"Shakil",1500)

ShakilAccount.addBalance(1500);
console.log(ShakilAccount)
