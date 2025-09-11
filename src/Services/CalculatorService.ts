import Big from "big.js";

export class CalculatorService {

    add(firstNumber: number, secondNumber: number): string {
        const a = new Big(firstNumber);
        const b = new Big(secondNumber);

        const result = a.plus(b)

        return result.toString();
    }

    subtraction(firstNumber: number, secondNumber: number): string {
        const a = new Big(firstNumber);
        const b = new Big(secondNumber);

        const result = a.minus(b)

        return result.toString();
    }

    multiply(firstNumber: number, secondNumber: number): string {
        const a = new Big(firstNumber);
        const b = new Big(secondNumber);

        const result = a.mul(b)

        return result.toString();
    }

    divide(firstNumber: number, secondNumber: number): string {

        if(firstNumber <= 0 || secondNumber <= 0) {
            throw Error("Não é possível fazer divisão por zero.")
        }
        const a = new Big(firstNumber);
        const b = new Big(secondNumber);

        const result = a.div(b)

        return result.toString();
    }
}