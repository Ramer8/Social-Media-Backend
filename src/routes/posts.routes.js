import { Router } from "express"
import {
  createPost,
  deletePost,
  updatePost,
  getOwnPosts,
  getPosts,
  getPostById,
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

router.put("/like/:userId", auth, putLikeAndDislike)

export default router
