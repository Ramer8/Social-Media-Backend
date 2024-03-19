import User from "../models/User.js"

export const getUsers = async (req, res) => {
  try {
    const showUser = await User.find().select("-password")

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
export const updateProfile = async (req, res) => {
  try {
    const userId = req.tokenData.userId
    const name = req.body.name

    const updatedProfile = await User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        name: name,
      },
      {
        new: true,
      }
    )

    res.status(201).json({
      success: true,
      message: "Profile updated succesfully",
      data: updatedProfile,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Profile can't update",
      error: error,
    })
  }
}

// export const getUserByEmail = async (req, res) => {
//   try {
//     const email = req.query.email

//     let queryList = {}

//     if (req.query.email) {
//       queryList.email = req.query.email
//     }

//     const fetchedEmail = await User.find(queryList)

//     console.log(fetchedEmail)

//     res.status(201).json({
//       success: true,
//       message: "Email founded succesfully",
//       // data: fetchedEmail,
//     })
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Email can't update",
//       error: error,
//     })
//   }
// }

export const deleteUser = async (req, res) => {
  try {
    const idToDelete = req.params.id

    const deleteUser = await User.deleteOne({
      _id: idToDelete,
    })

    if (!deleteUser.deletedCount) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    res.status(201).json({
      success: true,
      message: "User deleted succesfully",
      data: deleteUser,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User can't deleted",
      error: error,
    })
  }
}
