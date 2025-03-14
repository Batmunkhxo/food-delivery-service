import { Users } from "../../models/users.model.js";

const getUsers = async (req,res) => {
    trt{
        const userData = await Users.find({})
        res.send(userData).status(200)
    } catch(error){
        console.log("error",error)
        res.send().status(200)
    }
}

export default getUsers