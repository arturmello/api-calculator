export class CalculatorDBService {
    constructor(   
    ) {
    }
    save(a: number, b: number, operation: string, result: number) {
        const calculation: Calculation = {
            first_number: a,
            second_number: b,
            operation,
            result
        }

        //TODO: SALVAR NO BANCO
    }

    getHistory(): Array<Calculation> {
        //TODO: IMPLEMENTAR LÓGICA DE BUSCAR DO BANCO
        return [
            
        ]
    }
}

export interface Calculation {
    first_number: number;
    second_number: number;
    operation: string;
    result: number;
    label?: string;
}