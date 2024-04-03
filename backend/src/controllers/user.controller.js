import { signUpUserService, signInUserService } from "../services/user.services.js";
import { userSchema } from "../validations/user.validation.js";
import bcrypt from "bcrypt"

export const signup = async (req, res) => {
    try {

        await userSchema.validate(req.body);

        const hashPassword = await bcrypt.hash(req.body.password, 8);

        req.body.password = hashPassword;
        console.log("chegou aqui")

        const user = await signUpUserService(req.body);

        res.status(201).send(user);

    } catch (error) {

        res.status(400).send(error);

    }
};

export const signin = async (req, res) =>{
    console.log("chegou aqui funcao de pegar usuarios")
    try {
        const users = await signInUserService();
        console.log("-------")
        console.log(users)
        console.log("-------")
        res.send(users)
    } catch (error) {
        console.log("caiu no cacth")
        res.status(400).send(error)
    }
}