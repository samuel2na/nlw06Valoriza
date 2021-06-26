import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
    async handle(request: Request, response: Response){
        const { user_id } = request; // está vindo do request pois o user tem que estar logado, por isso não pegamos do request.body

        const listUserSendComplimentsService = new ListUserSendComplimentsService();
        
        const compliments = await listUserSendComplimentsService.execute(user_id);

        return response.json(compliments);

    }
}

export { ListUserSendComplimentsController };