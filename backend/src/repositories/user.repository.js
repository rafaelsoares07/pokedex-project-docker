import { prisma } from "../database/prisma.js";

export const createUser = async (data)=>{
    const user = await prisma.user.create({
        data,
        select:{
            id:true,
            name:true,
            email:true,
            password:false,
            phone:true
        }
    })
    return user
}

export const loginUser = async () => {
    const users = await prisma.user.findMany({});
    console.log("chegou no repository")
    console.log(users)
    return users
}