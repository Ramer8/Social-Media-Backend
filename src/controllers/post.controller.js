import Post from "../models/Post.js"
import User from "../models/User.js"

export const createPost = async (req, res) => {
  try {
    const userId = req.tokenData.userId
    const { content } = req.body

    const name = await User.findById(userId).name

    if (!content || content === "") {
      return res.status(400).json({
        success: false,
        message: "Content required",
      })
    }

    const newPost = await Post.create({
      userId,
      content,
      name,
    })

    console.log(newPost)
    res.status(201).json({
      success: true,
      message: "Post created succesfully",
      data: newPost,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post can't be created",
      error: error,
    })
  }
}
