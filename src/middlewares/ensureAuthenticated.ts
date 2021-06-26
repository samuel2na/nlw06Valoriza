import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request:Request, response:Response, next:NextFunction) {
    // receber o token
    const authToken = request.headers.authorization;
    
    // validar se token está preenchido
    if(!authToken) {
        return response.status(401).end();
    }

    //a linha abaixo ignora a primeira posição do split e coloca a segunda dentro da variavel token
    const [, token] = authToken.split(" ");

    // validar se o token está válido
    try{
        const { sub } = verify(token, "a55f01a670f977d8b462ff90da7a693d") as IPayload;
        
        // Recuperar informações do usuário
        request.user_id = sub;
        
        return next();
    }catch(err){
        return response.status(401).end();
    }
    
}