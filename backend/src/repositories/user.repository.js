import { prisma } from "../database/prisma.js";

export const createUser = async (data) => {
    console.log("chegou no create user");

    try {
        const user = await prisma.user.create({
            data,
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
            }
        });
        return user;
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error;
    }
}

export const getUserByEmail = async (userEmail) => {
    try {
        const user = await prisma.user.findUnique({
            where:{
                email:userEmail
            },
            select:{
                id: true,
                name: true,
                lastname:true,
                email: true,
                password: false,
                trainername:true
            }
        })
        return user
    } catch (error) {
        throw error
    }

}