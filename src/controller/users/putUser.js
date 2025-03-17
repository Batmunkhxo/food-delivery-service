import { Users } from "../../models/users.model.js";
import mongoose from "mongoose";

const updateUser = async (req, res) => {
  const { id, userName } = req.body;
  //   console.log(id);
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(`${id}`) },
      { userName },
      { new: true }
    );
    console.log(updatedUser);
    res.status(200).json({
      success: true,
      message: `Successfully find the user with ${id}`,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: true, message: "Internal Error" });
  }
};
export default updateUser;