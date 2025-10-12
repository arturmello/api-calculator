import { CalculatorService } from "../Services/CalculatorService";
import { CalculatorDBService } from "../Services/CalculatorDBService";

export class CalculatorController {
    constructor(
        private calculatorService: CalculatorService,
        private calculatorDBService: CalculatorDBService
    ) { }

    async add(firstNumber: number, secondNumber: number): Promise<number> {
        const result = this.calculatorService.add(firstNumber, secondNumber);
        await this.calculatorDBService.save(firstNumber, secondNumber, "sum", Number(result));
        return Number(result);
    }


    async subtraction(firstNumber: number, secondNumber: number): Promise<number> {
        const result = this.calculatorService.subtraction(firstNumber, secondNumber);
        await this.calculatorDBService.save(firstNumber, secondNumber, "subtract", Number(result));
        return Number(result);
    }

    async multiply(firstNumber: number, secondNumber: number): Promise<number> {
        const result = this.calculatorService.multiply(firstNumber, secondNumber);
        await this.calculatorDBService.save(firstNumber, secondNumber, "multiply", Number(result));
        return Number(result);
    }

    async divide(firstNumber: number, secondNumber: number): Promise<number> {
        const result = this.calculatorService.divide(firstNumber, secondNumber);
        await this.calculatorDBService.save(firstNumber, secondNumber, "divide", Number(result));
        return Number(result);
    }

    async getHistoryFormatted() {
        const history = await this.calculatorDBService.getHistory();

        return history.map(item => ({
            operação:
                item.operation === "sum" ? "Soma" :
                    item.operation === "subtract" ? "Subtração" :
                        item.operation === "multiply" ? "Multiplicação" :
                            item.operation === "divide" ? "Divisão" :
                                item.operation,
            números: `${item.first_number} e ${item.second_number}`,
            resultado: item.result
        }));
    }


}