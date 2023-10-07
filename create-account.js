function createAccount(pin, initialDeposit) {
    let balance = initialDeposit || 0;

    return {
        checkBalance: function(inputPin) {
            if (inputPin !== pin) {
                return "Invalid PIN.";
            }
            return `$${balance}`;

        },

        deposit: function(inputPin, amount) {
            if (inputPin !== pin) {
                return "Invalid PIN.";
            }
            balance += amount;
            return `Successfully deposited $${amount}. Current balance: $${balance}.`;
        },

        withdraw: function(inputPin, amount) {
            if (inputPin !== pin) {
                return "Invalid PIN.";
            }
            if (amount > balance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            balance -= amount;
            return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
        },

        changePin: function(oldPin, newPin) {
            if (oldPin !== pin) {
                return "Invalid PIN.";
            }
            pin = newPin;
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };
