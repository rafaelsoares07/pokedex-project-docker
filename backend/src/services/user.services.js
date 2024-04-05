import { createUser, getUserByEmail } from "../repositories/user.repository.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const signUpUserService = async (data) => {
    console.log("chegou no service");

    try {
        const user = await createUser(data);
        return user;
    } catch (error) {
        throw error;
    }
}

export const signInUserService = async (data) => {
    
    try {
        const userExist = await getUserByEmail(data.email)
        console.log(userExist)
        
        console.log("dadadada")
        const isMatch = await bcrypt.compare(data.password, userExist.password)
        console.log("da"+isMatch)

        if(isMatch){
            return generateTokenJWT(userExist)
        }
        return "Email ou senha não conferem"
    } catch (error) {
        throw error
    }
    
}

function generateTokenJWT(user){
    const token = jwt.sign(user, "secret", {expiresIn:'1h'})
    if(token){
        console.log("ddd")
        return {
            ...user,
            token
        }
    }
    return token
}