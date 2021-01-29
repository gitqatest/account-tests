var assert = require("assert");
var expect = require("chai").expect;
var should = require("chai").should();

class BankAccount
{
    constructor(amount)
    {
        this.balance = amount;
    }

    debit( amt )
    {
        if (amt <= this.balance){
            if(amt > 20){
                this.balance = this.balance - amt -1;
            }else{
                this.balance = this.balance - amt;
            }
        }

        return this.balance;
    }

    credit( amt )
    {
        this.balance += amt;

        return this.balance;
    }

    queryBalance()
    {
        return this.balance;
    }
}


describe('Is object constructed properly', function() {
    it('Balance should be same as init value', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 50;

        // act...
        var actualResult = cut.queryBalance();

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
  });

describe('Is object debited properly', function() {
    it('Balance should be reduced', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 40;
        var debitAmount = 10;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('Is object credited properly', function() {
    it('Balance should be increased', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 80;
        var creditAmount = 30;

        // act...
        var actualResult = cut.credit(creditAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult, "credit() failed");
    });
});

describe('Is object credited properly with fees', function() {
    it('Balance should be increased', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 80;
        var creditAmount = 30;

        // act...
        var actualResult = cut.credit(creditAmount);

        // assert...
        assert.strictEqual(cut.queryBalance(), expectedResult, "queryBalance() failed");
    });
});

describe('Is object is not debited if debit amount is greter than balance', function() {
    it('Balance should not be reduced', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 50;
        var debitAmount = 60;

        // act...
        var actualResult = cut.debit(debitAmount);
        console.log(actualResult);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('add 1 if greater than 20', function() {
    it('Balance should  be reduced', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 19;
        var debitAmount = 30;

        // act...
        var actualResult = cut.debit(debitAmount);
        console.log(actualResult);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});