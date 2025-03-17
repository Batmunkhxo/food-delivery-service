import { Users } from "../../models/users.model.js";
import mongoose from "mongoose";

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUsers = await Users.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(`${id}`),
    });

    if (!deletedUsers) {
      res.status(400).json({ error: true, message: "Not Found" });
    } else {
      res.status(200).json({
        success: true,
        message: `Successfully delete the user with ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: "Internal Error" });
  }
};
export default deleteUsers;