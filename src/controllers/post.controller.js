// import Post from "../models/Post"

export const createPost = async (req, res) => {
  try {
    const userId = req.tokenData.userId
    console.log(userId)
    // const Post = {
    //   title: "Hello World",
    //   content: "This is a sample post content.",
    //   author: "John Doe",
    // }
    // const newPost = await Post.create({})
    res.status(201).json({
      success: true,
      message: "Post created succesfully",
      //   data: newPost,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post can't be created",
      error: error,
    })
  }
}
