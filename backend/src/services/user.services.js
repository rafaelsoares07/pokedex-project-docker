import { createUser, getUserByEmail } from "../repositories/user.repository.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signUpUserService = async (data) => {
 
    await createUser(data);

    const userExist = await getUserByEmail(data.email)

    const token = jwt.sign(userExist.id, "secret")

    delete userExist.password

    const returnUser = { 
        token,
        user:userExist
    }

    return returnUser
    
}

export const signInUserService = async (data) => {


    const userExist = await getUserByEmail(data.email)

    if (!userExist) {
        throw { message: "Login ou senha inválidos, por favor tente novamente", code: 301 }
    }
    console.log(userExist)
    const isMatch = bcrypt.compareSync(data.password, userExist.password)
    if (!isMatch) {
        throw { message: "Login ou senha inválidos, por favor tente novamente", code: 301 }
    }
    console.log(isMatch)
    const token = jwt.sign(userExist.id, "secret")

    delete userExist.password

    const returnUser = {
        token,
        user:userExist
    }
    console.log(returnUser)
    return returnUser
}
