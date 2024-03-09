import { Router } from "express"
import { getUsers } from "../controllers/user.controller.js"
// import { getProfile } from "../controllers/user.controller.js"

const router = Router()

router.get("/", getUsers)
// router.get("/", getProfile)

export default router
