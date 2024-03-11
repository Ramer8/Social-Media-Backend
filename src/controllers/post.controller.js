import Post from "../models/Post.js"
import handleError from "../errors/handleError.js"
// import User from "../models/User.js"

export const createPost = async (req, res) => {
  try {
    const userId = req.tokenData.userId
    const { content } = req.body

    // const PostOwnerName = await User.find()
    // console.log(PostOwnerName)

    if (content === "" || !content) {
      throw new Error("Content required")
    }

    const newPost = await Post.create({
      userId,
      content,
      // PostOwnerName,
    })
    console.log(newPost)
    res.status(201).json({
      success: true,
      message: "Post created succesfully",
      data: newPost,
    })
  } catch (error) {
    if (error.message === "Content required") {
      return handleError(res, error.message, 400)
    }

    handleError(res, "Post can't be created", 500)
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
    console.log("from getPosts")

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

export const getPostById = async (req, res) => {
  try {
    console.log(req.params.id)
    console.log("from getPostById")
    //We need simple id in post content to use in route
    //and then get this id to update.
    // Current I get the post content of logged user
    // When I get this ordinary simple id number just
    // change this line (userId: userId), to
    // the request id number like (id : req.params.id)
    // and put this id number on get method too.
    const userId = req.tokenData.userId
    const { id } = req.params
    const getMyPost = await Post.find({
      userId: userId,
      // _id: id
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

export const getAnyUserPost = async (req, res) => {
  try {
    const userId = req.tokenData.userId
    const { userIdparams } = req.params
    console.log(userIdparams)
    // const getMyPost = await Post.find({
    //   userId: userId,
    //   // _id: id
    // }).select("_id, content")

    // if (getMyPost.length === 0) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Not found post to show",
    //   })
    // }
    console.log("from getAnyUserPost")
    res.status(201).json({
      success: true,
      message: "Post retrieved succesfully",
      // data: getMyPost,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post can't be retrieved",
      error: Error,
    })
  }
}

export const putLikeAndDislike = async (req, res) => {
  try {
    const { userId } = req.tokenData
    const id = req.params.id

    const getMyPost = await Post.findById({
      _id: id,
    })
    //
    if (!getMyPost) {
      throw new Error("Post not found")
    }

    //Check if exist the userId in Likes object
    const isInArray = getMyPost.likes.includes(userId)
    console.log(isInArray)

    if (isInArray) {
      getMyPost.likes.pop(userId)
      await getMyPost.save()
    } else {
      getMyPost.likes.push(userId)
      console.log("no esta")
      await getMyPost.save()
    }

    res.status(201).json({
      success: true,
      message: "Post retrieved succesfully",
      data: getMyPost,
    })
  } catch (error) {
    if (error.message === "Post not found") {
      return handleError(res, error.message, 400)
    }
    handleError(res, "ERROR", 500)
  }
}
