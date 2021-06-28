import { Request, Response } from 'express';
import { DeleteTagService } from '../services/DeleteTagsService';

class DeleteTagController {

    async handle(request: Request, response: Response){
        const { tag_id } = request.body;

        const deleteTagService = new DeleteTagService();

        const tag = await deleteTagService.execute(tag_id);

        return response.json(tag);
    }
}

export { DeleteTagController };