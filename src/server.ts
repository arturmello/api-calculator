import express from "express";
import { CalculatorController } from "./Controller/CalculatorController";
import { CalculatorService } from "./Services/CalculatorService";
import { CalculatorDBService } from "./Services/CalculatorDBService";

const app = express();
const port = 3001;
const controller = new CalculatorController(
    new CalculatorService(),
    new CalculatorDBService()
);

//rota de soma
app.get('/sum', async (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) {
        return res.status(400).json({
            error:
                "Parâmetros 'a' e 'b' são obrigatórios."
        });
    }

    const firstNumber = Number(a);
    const secondNumber = Number(b);
    const result = await controller.add(firstNumber, secondNumber);

    res.json({ resultado: result });
});

//rota de subtração
app.get('/subtract', async (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) {
        return res.status(400).json({
            error:
                "Parâmetros 'a' e 'b' são obrigtórios."
        });
    }

    const firstNumber = Number(a);
    const secondNumber = Number(b);
    const result = await controller.subtraction(firstNumber, secondNumber);

    res.json({ resultado: result });
});

//rota de multiplicação 
app.get('/multiply', async (req, res) => {
    const { a, b } = req.query;

    if (!a || !b) {
        return res.status(400).json({
            error:
                "Parâmetros 'a' e 'b' são obrigtórios."
        });
    }

    const firstNumber = Number(a);
    const secondNumber = Number(b);
    const result = await controller.multiply(firstNumber, secondNumber);

    res.json({ resultado: result });
});

//rota de divisão
app.get('/divide', async (req, res) => {
    const { a, b } = req.query;


    if (!a || !b) {
        return res.status(400).json({
            error:
                "Parâmetros 'a' e 'b' são obrigtórios."
        });
    }

    const firstNumber = Number(a);
    const secondNumber = Number(b);


    try {
        const result = await controller.divide(firstNumber, secondNumber);
        res.json({ resultado: result });
    } catch (err: any) {
        res.status(400).json({
            error:
                err.message
        });
    }
});



app.get('/history', async (req, res) => {
    try {
        const history = await controller.getHistoryFormatted();
        res.json(history);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3001");
});