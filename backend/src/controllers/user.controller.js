import { signUpUserService, signInUserService } from "../services/user.services.js";
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

        if (error.code) {
            res.status(error.code).json({ message: error.message });
        } else {
            res.status(500).send(error);
        }

    }
};

export const signin = async (req, res) => {

    try {
        const data = req.body;
        const authUser = await signInUserService(data);
        res.status(200).json(authUser);
    } catch (error) {
        console.log(error)
        if (error.code) {
            res.status(error.code).json({ message: error.message });
        } else {
            res.status(500).send(error);
        }
    }
}