import "reflect-metadata";
import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

//criando middleware para tratar os erros
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction)=> {
        if(err instanceof Error){ //verifica se é um erro que tratamos
            return response.status(400).json({
                error: err.message
            });
        }
        return response.status(500).json({
            error: "error",
            message: "Internal Server Error"
        });
});

app.listen(3000, () => {
    console.log("*****server.ts***** Server is running nlw");
});