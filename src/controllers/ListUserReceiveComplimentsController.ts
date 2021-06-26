import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService";

class ListUserReceiveComplimentsController {
    async handle(request: Request, response: Response){
        const { user_id } = request; // está vindo do request pois o user tem que estar logado, por isso não pegamos do request.body

        const listUserReceiverComplimentsService = new ListUserReceiverComplimentsService();
        
        const compliments = await listUserReceiverComplimentsService.execute(user_id);

        return response.json(compliments);

    }
}

export { ListUserReceiveComplimentsController };