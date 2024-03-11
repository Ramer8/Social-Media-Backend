import { Router } from "express"
import {
  createPost,
  deletePost,
  updatePost,
  getOwnPosts,
  getPosts,
  getPostById,
  getAnyUserPost,
  putLikeAndDislike,
} from "../controllers/post.controller.js"
import { auth } from "../middlewares/auth.js"

const router = Router()

// route=> localhost:4000/api/posts/

router.post("/", auth, createPost)

router.delete("/:id", auth, deletePost)

router.put("/:id", auth, updatePost)

router.get("/own", auth, getOwnPosts)

router.get("/", auth, getPosts) //retrieve all post

router.get("/:id", auth, getPostById)

router.put("/like/:id", auth, putLikeAndDislike)

// router.get("/users/:user-id", auth, getAnyUserPost)

router.get("/thendelete/:userIdparams", auth, getAnyUserPost)

// router.delete('/:id', auth, deletePostById)
// router.get('/:userId', auth, getPostByUserId)

export default router
