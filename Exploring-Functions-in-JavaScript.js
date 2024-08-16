
let balance = 0; 
let accountNumber = "1234567890"; // Example account number

function Deposit(amount) {
    balance += amount;
    console.log(`Amount $${amount} deposited into account ${accountNumber}.`);
}

function Withdraw(withdraw_amount) {
    if (withdraw_amount <= balance) {
        balance -= withdraw_amount;
        console.log(`Amount $${withdraw_amount} withdrawn from account ${accountNumber}.`);
    } else {
        console.log(`Insufficient balance in account ${accountNumber}.`);
    }
}

function Balance() {
    console.log(`Account ${accountNumber} balance: $${balance}`);
}


Deposit(100);  // Deposits $100
Withdraw(50);  // Withdraws $50
Balance();     // Prints balance
