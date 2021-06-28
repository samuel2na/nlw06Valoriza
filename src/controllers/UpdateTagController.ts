import { Request, Response } from 'express';
import { UpdateTagService } from '../services/UpdateTagService';

class UpdateTagController {

    async handle(request: Request, response: Response){
        const { name, tag_id } = request.body;

        const updateTagService = new UpdateTagService();

        const tag = await updateTagService.execute(name, tag_id);

        return response.json(tag);
    }
}

export { UpdateTagController };