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
        // Aqui você pode lidar com o erro da forma desejada
        console.error("Erro ao criar usuário:", error);
        throw error; // Você também pode optar por relançar o erro para que ele seja tratado em um nível superior
    }
}

export const loginUser = async () => {
    const users = await prisma.user.findMany({});
    console.log("chegou no loginUser")
    console.log(users)
    return users
}