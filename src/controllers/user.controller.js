import { signUpUserService } from "../services/user.services.js";
import { userSchema } from "../validations/user.validation.js";
import bcrypt from "bcrypt"

export const signup = async (req, res) => {
    try {

        await userSchema.validate(req.body);

        const hashPassword = await bcrypt.hash(req.body.password, 8);

        req.body.password = hashPassword;

        const user = await signUpUserService(req.body);

        res.status(201).send(user);

    } catch (error) {

        res.status(400).send(error);

    }
};

export const signin = async (req, res) =>{
    try {
        const users = await getAllUsers();
        console.lof(users)
        res.send(users)
    } catch (error) {
        res.status(400).send(error)
    }
}