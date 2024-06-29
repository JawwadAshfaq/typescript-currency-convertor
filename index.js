#! usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    INR: 82,
    PKR: 287,
    EUR: 92,
    GBP: 77,
    JPY: 144,
    CNY: 7,
    CAD: 1,
    CHF: 1,
    RUB: 91,
    BRL: 5,
    ZAR: 19
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "INR", "PKR", "EUR", "GBP", "JPY", "CNY", "CAD", "CHF", "RUB", "BRL", "ZAR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "INR", "PKR", "EUR", "GBP", "JPY", "CNY", "CAD", "CHF", "RUB", "BRL", "ZAR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let formAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / formAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
