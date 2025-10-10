import { supabase } from "./supabaseClient";


export class CalculatorDBService {
    constructor(
    ) {
    }
    async save(a: number, b: number, operation: string, result: number) {
        const { error } = await supabase
            .from("calculations")
            .insert([
                { first_number: a, second_number: b, operation, result }
            ]);

        if (error) {
            console.error("Erro ao salvar no banco:", error.message);
            throw new Error("Erro ao salvar cálculo no banco de dados");
        }
    }


    async getHistory(): Promise<Calculation[]> {
        const { data, error } = await supabase
            .from("calculations")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Erro ao buscar histórico:", error.message);
            throw new Error("Erro ao buscar histórico no banco de dados");
        }

        return data || [];
    }

}

export interface Calculation {
    first_number: number;
    second_number: number;
    operation: string;
    result: number;
    label?: string;
}