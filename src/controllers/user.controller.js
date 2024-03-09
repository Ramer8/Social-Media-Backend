import User from "../models/User.js"

export const getUsers = async (req, res) => {
  try {
    const showUser = await User.find()
    // const books = await Book.find().select("title")
    res.status(201).json({
      success: true,
      message: "Book registered succesfully",
      data: showUser,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Book can't be registered",
      error: error,
    })
  }
}
// export const getProfile = async (req, res) => {
//   try {
//     const {id} = req.body // then get from TOKEN.DATA

//     const showProfile = await User.findById({
//         id:id
//     })
//     // const books = await Book.find().select("title")
//     res.status(201).json({
//       success: true,
//       message: "Book registered succesfully",
//       data: showProfile,
//     })
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Book can't be registered",
//       error: error,
//     })
//   }
// }
