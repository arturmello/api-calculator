import express from "express";
import { CalculatorController } from "./Controller/CalculatorController";
import { CalculatorService } from "./Services/CalculatorService";

const app = express()
const port = 3001

const controller = new CalculatorController(
    new CalculatorService()
)

app.get('/', (req, res) => {
  res.send(controller.add(0.7, 0.23))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
