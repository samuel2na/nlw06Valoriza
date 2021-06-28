import { getConnection, getCustomRepository } from "typeorm";
import { Tag } from "../entities/Tag";
//import { Request, Response} from "express";
import { TagsRepositories } from "../repositories/TagsRepositories";

class UpdateTagService {

    async execute(name: string, tag_id: string ){

        //const { name, tag_id } = request.body;
        const tagRepo = getCustomRepository(TagsRepositories);

        await getConnection()
            .createQueryBuilder()
            .update(Tag)
            .set({ name: name })
            .where("id = :id", { id: tag_id })
            .execute();

        const tag = await tagRepo.findOne( tag_id );

        return tag;
    }
}

export { UpdateTagService };