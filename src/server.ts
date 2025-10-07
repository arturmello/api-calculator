import express from "express";
import { CalculatorController } from "./Controller/CalculatorController";
import { CalculatorService } from "./Services/CalculatorService";

const app = express();
const port = 3001;
const controller = new CalculatorController(
    new CalculatorService()
);

//rota de soma
app.get('/sum', async (req, res) => {
    const { a, b } = req.query;

    if(!a || !b) {
        return res.status(400).json({ error:
            "Parâmetros 'a' e 'b' são obrigatórios."});
    }

    const firstNumber = Number(a);
    const secondNumber = Number(b);
    const result = controller.add(firstNumber, secondNumber);
    
    res.json({ resultado: result });
})

//rota de subtração
app.get('/subtract', async (req, res) => {
    const { a, b } = req.query;

    if(!a || !b) {
        return res.status(400).json({ error: 
            "Parâmetros 'a' e 'b' são obrigtórios."});
    }

    const firstNumber = Number(a);
    const secondNumber = Number(b);
    const result = controller.subtraction(firstNumber, secondNumber);

    res.json({ resultado: result });
})

//rota de multiplicação 
app.get('/multiply', async (req, res) => {
    const { a, b } = req.query;

    if(!a || !b) {
        return res.status(400).json({ error: 
            "Parâmetros 'a' e 'b' são obrigtórios."});
    }

    const firstNumber = Number(a);
    const secondNumber = Number(b);
    const result = controller.multiply(firstNumber, secondNumber);

    res.json({ resultado: result });
})

//rota de divisão
app.get('/divide', (req, res) => {
    const { a, b } = req.query;

    
    if(!a || !b) {
        return res.status(400).json({ error: 
            "Parâmetros 'a' e 'b' são obrigtórios."});
    }

    const firstNumber = Number(a);
    const secondNumber = Number(b);
    

    try {
        const result = controller.divide(firstNumber, secondNumber);
        res.json({ resultado: result });
    } catch (err: any) {
        res.status(400).json({ error:
    err.message });
    }
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3001");
});