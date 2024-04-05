import { createUser, loginUser } from "../repositories/user.repository.js";


export const signUpUserService = async (data) => {
    console.log("chegou no service");

    try {
        const user = await createUser(data);
        return user;
    } catch (error) {
        console.error("Erro no serviço de cadastro de usuário:", error);
        throw error;
    }
}


export const signInUserService = async () => {
    console.log("chegou no service de pegar")
    const users = await loginUser()
    return users
}