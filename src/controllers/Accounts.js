class Account {
    agency;
    _balance;

    withdraw(value) {
        if (this._balance >= value) {
            this._balance -= value;
        } else {
            prompt('Not enought funs')
        }

    }
}


module.exports = new Account();