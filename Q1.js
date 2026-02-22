function BankAccount(){
    let Balance=0
    let Transaction=[]
    return{
        deposit(amount){
            if(amount<=0){
                return "Invalid deposit Amount"
            }
            Balance+=amount
            Transaction.push(`deposited: ${amount}`)
            return Balance
        },
        withdraw(amount){
            if(amount<=0) {
                return "incalid withdraw amount"
            }
            if(amount>Balance){
                return "insufficient balance"
            }
           Balance -=amount;
            Transaction.push(`withdrawn:,${amount}`)
            return Balance
        },
        getBalance(){
            return Balance
        },
        getTransactionHistoory(){
            return [...Transaction]
        }

    }
}


