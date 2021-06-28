import { getCustomRepository, getConnection } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class DeleteTagService {

    async execute(tag_id: string){

        const tagRepo = getCustomRepository(TagsRepositories);

        const tagExists = await tagRepo.findOne(tag_id);

        if(!tagExists){
            const message = { message: "invalid tag" }
            return message;
        }

        const result = await tagRepo.delete(tag_id);

        const message = { message: "tag deleted successfully" }
        return message;
        
    }
}

export { DeleteTagService };