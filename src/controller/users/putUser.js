import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt"

const putUser = async (req, res) => {
    // console.log(req.body)
    const { email, password } = req.body
    try {
        const existingUser = await Users.findOne()
    }
}