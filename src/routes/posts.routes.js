import { Router } from "express"
import {
  createPost,
  // getPosts
} from "../controllers/post.controller.js"
import { auth } from "../middlewares/auth.js"

const router = Router()

// route=> localhost:4000/api/posts/

router.post("/", auth, createPost)
////////router.get("/", auth, getPosts)

// router.delete('/:id', auth, deletePostById)
// router.put('/', auth, updatePost)
// router.get('/own', auth, getOwnPosts)
// router.get('/:id', auth, getPostById)
// router.get('/:userId', auth, getPostByUserId)

export default router
