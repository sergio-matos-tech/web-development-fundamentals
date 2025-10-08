// method to sleep
async function sleep(seconds = 1) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}



class Wallet {
    constructor() {
        this._balance = 0;
    }

    get balance() {
        return this._balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._processTransaction(amount);
            sleep();
            this._balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
        } else {
            throw new Error('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._processTransaction(amount);
            sleep();
            this._balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else if (amount > this._balance) {
            throw new Error('Insufficient funds.');
        } else {
            throw new Error('Withdrawal amount must be positive.');
        }
    }

    _processTransaction() {
        // Private method to process transactions
        console.log(`Processing transaction...`);
    }
}

const myWallet = new Wallet();
myWallet.deposit(100);
myWallet.withdraw(30);
// myWallet.withdraw(80)
