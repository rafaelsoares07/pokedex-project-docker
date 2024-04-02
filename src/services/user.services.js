import { createUser, loginUser } from "../repositories/user.repository.js";

export const signUpUserService = async (data)=>{
    const user = await createUser(data);
    return user
}

export const signInUserService = async ()=>{
    const users = await loginUser()
    return users
}