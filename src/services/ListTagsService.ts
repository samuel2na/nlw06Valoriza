import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {

    async execute(){

        const tagsRepository = getCustomRepository(TagsRepositories);

        /// -- add novo campo ao array restornado
        //let tags = await tagsRepository.find();
        //tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}` }));

        const tags = await tagsRepository.find();

        return classToPlain(tags);
    }

}

export { ListTagsService };