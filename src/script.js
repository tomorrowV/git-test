class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
}
