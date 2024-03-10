import { Router } from "express"
import { getUsers, getProfile } from "../controllers/user.controller.js"

const router = Router()

router.get("/", getUsers)
router.get("/profile", getProfile)

export default router

//continue with another end points and create de middelwares.
