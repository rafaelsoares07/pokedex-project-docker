import { prisma } from "../database/prisma.js";

export const createUser = async (data) => {

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
}

export const getUserByEmail = async (userEmail) => {

    const user = await prisma.user.findUnique({
        where: {
            email: userEmail
        },
        select: {
            id: true,
            name: true,
            lastname: true,
            email: true,
            password: true,
            trainername: true
        }
    })
    return user


}