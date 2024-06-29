
let amount = 0; 
let withdraw_amount = 0;

function Deposit(amount){
        this.balance += amount;
        console.log(`Amount $${amount} deposited into account ${this.accountNumber}.`);
    }

function Withdraw(withdraw_amount ) {
    if (withdraw_amount <= this.amount) {
        this.balance -= amount;
        console.log(`Amount $${withdraw_amount} withdrawn from account ${this.accountNumber}.`);
    } else {
        console.log(`Insufficient balance in account ${this.accountNumber}.`);
    }
}

function Balance() {
    console.log(`Account ${this.accountNumber} balance: $${this.amount}`);
}
