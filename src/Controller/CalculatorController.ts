import { CalculatorService } from "../Services/CalculatorService";

export class CalculatorController {
    constructor(
        private calculatorService: CalculatorService
    ) {

    }

    add(firstNumber: number, secondNumber: number): string {
        return this.calculatorService.add(firstNumber, secondNumber);
    }

    subtraction(firstNumber: number, secondNumber: number): string {
        return this.calculatorService.subtraction(firstNumber, secondNumber);
    }

    multiply(firstNumber: number, secondNumber: number): string {
        return this.calculatorService.multiply(firstNumber, secondNumber);
    }

    divide(firstNumber: number, secondNumber: number): string {
        return this.calculatorService.divide(firstNumber, secondNumber);
    }

}