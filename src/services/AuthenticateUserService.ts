import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        // e-mail exists
        const user = await usersRepositories.findOne({ email });
        
        if(!user) { throw new Error("Email/Password incorrect") }
        
        // senha correta ?
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) { throw new Error("Email/Password incorrect") }

        //gerar token - passar 3 parâmetros
        const token = sign(
            { email: user.email }, 
            "a55f01a670f977d8b462ff90da7a693d", // usar o md5 hash para decodificar
            { subject: user.id, 
              expiresIn: "1d"
            }
        );

        return token;
    }
}

export { AuthenticateUserService };