import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {

    async handle(request: Request, response: Response) {

        const listTagsServices = new ListTagsService();

        const tags = await listTagsServices.execute();

        return response.json(tags);

    }

}

export { ListTagsController };