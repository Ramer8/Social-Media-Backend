import { Router } from "express"
import {
  getUsers,
  getProfile,
  updateProfile,
  deleteUser,
  // getUserByEmail,
} from "../controllers/user.controller.js"

import { getAnyUserPost } from "../controllers/post.controller.js"

import { isSuperAdmin } from "../middlewares/isSuperAdmin.js"

import { auth } from "../middlewares/auth.js"

const router = Router()

// route => localhost:4000/api/users

// router.get("", getUserByEmail) // must put before getUsers cause have the same path.

// get profile

router.get("/", auth, isSuperAdmin, getUsers)

router.get("/profile", auth, getProfile)

router.put("/profile", auth, updateProfile) // update profile

router.get("/posts/:id", auth, getAnyUserPost) // Retrieve user post by id

router.delete("/:id", auth, isSuperAdmin, deleteUser)

// router.put("/:id/role", updateRoleById)

export default router
