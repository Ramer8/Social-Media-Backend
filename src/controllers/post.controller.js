import Post from "../models/Post.js"
// import User from "../models/User.js"

export const createPost = async (req, res) => {
  try {
    const userId = req.tokenData.userId
    const { content } = req.body

    // const name = await User.findById(userId).name

    if (!content || content === "") {
      return res.status(400).json({
        success: false,
        message: "Content required",
      })
    }

    const newPost = await Post.create({
      userId,
      content,
    })

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

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    //We need simple id in post content to use in route
    //and then get this id to delete.
    // Current I delete the post content of logged user
    // When I get this ordinary simple id number just
    // change this line code "50" (userId: userId), to
    // the request id number like (id : req.params.id)
    // and put this id number on delete method too.

    const userId = req.tokenData.userId

    const getPost = await Post.find({
      userId: userId,
    })

    if (getPost.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Not found post to delete",
      })
    }
    const postToDelete = await Post.deleteOne({
      userId,
    })

    console.log(postToDelete)
    res.status(201).json({
      success: true,
      message: "Post deleted succesfully",
      postDeleted: getPost,
      data: postToDelete,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post can't be deleted",
      error: Error,
    })
  }
}
export const updatePost = async (req, res) => {
  try {
    const { content } = req.body

    //We need simple id in post content to use in route
    //and then get this id to update.
    // Current I delete the post content of logged user
    // When I get this ordinary simple id number just
    // change this line (userId: userId), to
    // the request id number like (id : req.body.id)
    // and put this id number on update method too.

    const userId = req.tokenData.userId

    const postToUpdate = await Post.find({
      userId: userId,
    })

    if (postToUpdate.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Not found post to update",
      })
    }
    const updatePost = await Post.findOneAndUpdate(
      {
        userId: userId,
      },
      {
        content: content,
      },
      {
        new: true,
      }
    )
    res.status(201).json({
      success: true,
      message: "Post updated succesfully",
      data: updatePost,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post can't be updeted",
      error: Error,
    })
  }
}
export const getOwnPosts = async (req, res) => {
  try {
    //We need simple id in post content to use in route
    //and then get this id to update.
    // Current I delete the post content of logged user
    // When I get this ordinary simple id number just
    // change this line (userId: userId), to
    // the request id number like (id : req.body.id)
    // and put this id number on update method too.

    const userId = req.tokenData.userId

    const getMyPost = await Post.find({
      userId: userId,
    }).select("_id, content")

    if (getMyPost.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Not found post to show",
      })
    }

    res.status(201).json({
      success: true,
      message: "Post retrieved succesfully",
      data: getMyPost,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post can't be retrieved",
      error: Error,
    })
  }
}

export const getPosts = async (req, res) => {
  try {
    // when i have post of other users this function must show too.
    const userId = req.tokenData.userId

    const getMyPost = await Post.find({
      userId: userId,
    }).select("_id, content")

    if (getMyPost.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Not found post to show",
      })
    }

    res.status(201).json({
      success: true,
      message: "Post retrieved succesfully",
      data: getMyPost,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post can't be retrieved",
      error: Error,
    })
  }
}
