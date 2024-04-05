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
    
    try {
        const autheticatedUser = await signInUserService(req.body);
        res.status(201).send(autheticatedUser)
    } catch (error) {
        res.status(400).send(error)
    }
}