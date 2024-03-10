import User from "../models/User.js"

export const getUsers = async (req, res) => {
  try {
    const showUser = await User.find()
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
    console.log(req.body.id)
    // const userId = req.tokenData.userId

    console.log("hello")
    const { _id } = req.body // then get from TOKEN.DATA
    // const _id = "65e991237ece36b9f88f2c2a"
    const showProfile = await User.findById({
      _id: _id,
    }).select("-password, -role")
    console.log(showProfile)
    // const profile = await User.find().select("-password")
    res.status(201).json({
      success: true,
      message: "Book registered succesfully",
      //   data: showProfile,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Profile can't founded",
      error: error,
    })
  }
}
