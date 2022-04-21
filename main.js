const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate(
  '7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf'
);

const myWalletAddress = myKey.getPublic('hex');

const mac_Coin = new Blockchain();

mac_Coin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
mac_Coin.addTransaction(tx1);

mac_Coin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
mac_Coin.addTransaction(tx2);

mac_Coin.minePendingTransactions(myWalletAddress);

console.log();
console.log(
  `Balance of Mac is ${mac_Coin.getBalanceOfAddress(myWalletAddress)}`
);

// mac_Coin.chain[1].transactions[0].amount = 10;

console.log();
console.log('Blockchain valid?', mac_Coin.isChainValid() ? 'Yes' : 'No');
