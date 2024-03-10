import { Router } from "express"
import { getUsers, getProfile } from "../controllers/user.controller.js"
import { auth } from "../middlewares/auth.js"

const router = Router()

router.get("/", auth, getUsers)
router.get("/profile", auth, getProfile)

export default router

//continue with another end points and create de middelwares.
