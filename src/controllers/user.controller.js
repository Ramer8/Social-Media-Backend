import User from "../models/User.js"

export const getUsers = async (req, res) => {
  try {
    const showUser = await User.find().select("-password")
    // const books = await Book.find().select("title")

    res.status(201).json({
      success: true,
      message: "Users retrieved succesfully",
      data: showUser,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Users can't be founded",
      error: error,
    })
  }
}
export const getProfile = async (req, res) => {
  try {
    const userId = req.tokenData.userId

    const showProfile = await User.findById({
      _id: userId,
    }).select("-password")

    // .select("-password, -role") //avoid two key/value

    res.status(201).json({
      success: true,
      message: "Profile registered succesfully",
      data: showProfile,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Profile can't founded",
      error: error,
    })
  }
}
