import valid from 'card-validator';
import Amex from './assets/Cards/Amex.png';
import Default from './assets/Cards/Default.png';
import Visa from './assets/Cards/Visa.png';
import Mastercard from './assets/Cards/Mastercard.png';

export function validateInputs(name, number, date, cvv) {
    const numberValidation = valid.number(number).isValid;
    const nameValidation = typeof name === "string" ? true : false;
    const expValidation = valid.expirationDate(date).isValid;
    const cvvValidation = valid.cvv(cvv).isValid;

    if (numberValidation && nameValidation && expValidation && cvvValidation) {
        return true;
    } else {
        return false;
    }
}

export function figureOutErrors(name, number, date, cvv) {
    if (typeof name !== "string") {
        return "name";
    }
    if (valid.number(number).isValid !== true) {
        return "card number";
    }
    if (valid.expirationDate(date).isValid !== true) {
        return "expiration date";
    }
    if (valid.cvv(cvv).isValid !== true) {
        return "security code";
    }
}

function cleanInput(value) {
    return value.replace(/\D+/g, "");
}

export function formatCreditCard(value) {
    const cleanValue = cleanInput(value);
    const firstNumber = cleanValue.charAt(0);
    let currentValue;

    switch(firstNumber) {
        case "3":
            currentValue = `${cleanValue.slice(0, 4)} ${cleanValue.slice(
                4,
                10
            )} ${cleanValue.slice(10, 15)}`;
            break;

            default:
                currentValue = `${cleanValue.slice(0, 4)} ${cleanValue.slice(
                    4,
                    8
                )} ${cleanValue.slice(8, 12)} ${cleanValue.slice(12, 16)}`;
                break;
    }
    return currentValue.trim();
}

export function dateCheck(text) {
    let cleanText = text.replace(/\D/g, "").replace(/\W/gi, "");
    let all = cleanText.split("");
    if (all.length <= 2) {
        let joined = all.join("");
        return joined;
    } else {
        all.splice(2, 0, "/");
        let sliced = all.length > 5 ? all.slice(0, 5) : all;
        let formatted = sliced.join("");
        return formatted;
    }

    export function findCardType(number) {
        const firstNumber = number.toString().charAt(0);
        const secondNumber = number.toString().slice(1, 2);
        let cardType;

        switch (firstNumber) {
            case "4":
                cardType = Visa;
                break;
            case "5":
                cardType = Mastercard;
                break;
            default:
                cardType = Default;
                break;
        }
        return cardType;
    }
