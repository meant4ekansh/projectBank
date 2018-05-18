/*

1. Account creation => bank.createAccount("AccountName") = return AccountName
2. Account getBalance
3. Account deposit
4. Account Withdraw
5. Total Account

{
	Ankit : {
				b, last modified
			},
....
}
*/
var i = 0;

function Bank(){
  this.createdAccounts = [];
  var that = this;
  this.createAccount = function(name){
    _createAccount(that, name);
  }
  this.getCreatedAccounts = function(){return JSON.stringify(that.createdAccounts);}
}

function _createAccount(that, name){
  that[name] = new Account();
  // console.log(this[name], that, that.createdAccounts)
  that.createdAccounts.push(this[name])
}


function Account(){
  this.balance = 0;
  this.deposit = deposit;
  this.withdraw = Withdraw;
  this.getBalance = getBalance;
  this.time = Date.now();
}
function deposit(amount){
  this.balance += amount;
}
function Withdraw(amount){
  if(amount >= this.balance){
    console.log("insuffecient funds");
    return;
  }else{
    this.balance -= amount;
  }
}
function getBalance(){
  console.log(this.balance);
}
function details(){
  var myBank = JSON.stringify(Bank);
