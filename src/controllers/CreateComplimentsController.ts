import { Request, Response } from "express";
import { CreateComplimentServices } from "../services/CreateComplimentsService";

class CreateComplimentController {

    async handle(request: Request, response: Response) {

        const { tag_id, user_sender, user_receiver, message } = request.body;

        const createComplimentService = new CreateComplimentServices();

        const compliment = await createComplimentService.execute({
            tag_id, user_sender, user_receiver, message
        });
        
        return response.json(compliment);
    }
}

export { CreateComplimentController };