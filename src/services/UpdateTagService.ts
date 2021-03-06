import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class UpdateTagService {

    async execute(name: string, tag_id: string){

        const tagRepo = getCustomRepository(TagsRepositories);

        const tagExists = await tagRepo.findOne(tag_id);

        if(!tagExists){
            const message = { message: "invalid tag" }
            return message;
        }

        const result = await tagRepo.update(tag_id, { name: name });
        const newUpdated = { ...tagExists, name}

        return newUpdated;
    }
}

export { UpdateTagService };