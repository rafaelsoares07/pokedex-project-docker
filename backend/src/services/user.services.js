import { createUser, loginUser } from "../repositories/user.repository.js";

export const signUpUserService = async (data)=>{
    console.log("chegou no service")
    const user = await createUser(data);
    return user
}

export const signInUserService = async ()=>{
    console.log("chegou no service de pegar")
    const users = await loginUser()
    return users
}