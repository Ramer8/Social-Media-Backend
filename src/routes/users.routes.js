import { Router } from "express"
import {
  getUsers,
  getProfile,
  updateProfile,
} from "../controllers/user.controller.js"

import { getAnyUserPost } from "../controllers/post.controller.js"

import { isSuperAdmin } from "../middlewares/isSuperAdmin.js"

import { auth } from "../middlewares/auth.js"

const router = Router()

// route=> localhost:4000/api/users

// get profile
router.get("/", auth, isSuperAdmin, getUsers)
router.get("/profile", auth, getProfile)

// update profile
router.put("/profile", auth, updateProfile)

// Retrieve user post by id
router.get("/posts/:id", auth, getAnyUserPost)

// get by email
// router.get("/", auth, getUserByEmailQueryFilters)
// app.get("/api/users?", getUserByEmailQueryFilters)

export default router
